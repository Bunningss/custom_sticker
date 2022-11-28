import "./CardCustomCheckout.css";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { userReq } from "../../../Utilities/requestMethods";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeaderPrimary from "../../../Components/HeaderPrimary/HeaderPrimary";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const CardCustomCheckout = ({ shipping }) => {
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.products;
  const user = useSelector((state) => state.user);
  const userInfo = user.currentUser?.others._id;

  useEffect(() => {
    const items = cartItems.map((item) => ({
      price: item.price,
      quantity: item.Quantity,
    }));
    // const details = cartItems.map((item) => ({ productID: item._id, artwork: item.ArtworkFile, instruction: item.ArtworkInstruction, color: item.ImprintColor, size: item.StickerSize, quantity: item.Quantity, type: item.StickerType  }));

    if (shipping) {
      const body = {
        cartItems: items,
        shipping: {
          name: shipping.name,
          address: {
            line1: shipping.shipping,
          },
        },
        description: "Product Description",
        receipt_email: shipping.email,
      };

      const CustomCheckout = async () => {
        const res = await userReq.post("/pay/create-payment-intent", body);

        if (res.data.clientSecret) {
          setClientSecret(res.data.clientSecret);
        } else {
          window.location.reload();
        }
      };
      CustomCheckout(); // Making the function call
    } else {
      return;
    }
  }, [shipping, cartItems]);

  const headers = {
    small: "payment information",
    large: "Enter your card details",
  };

  const cardHandleChange = (e) => {
    const { error } = e;
    setError(error ? error.message : "");
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    setProcessing(true);
    if (!clientSecret) {
      setProcessing(false);
      alert("An error occured.");
      window.location.reload();
      return;
    }
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
      },
    });
    if (payload.error) {
      setProcessing(false);
      setError(`Payment failed: ${payload.error.message}`);
    } else {
      const details = cartItems.map((item) => ({
        productName: item.sticker || item.title,
        productID: item._id,
        artwork: item.ArtworkFile || item.artworkFile,
        instruction: item.ArtworkInstruction || item.artworkInstuction,
        color: item.ImprintColors,
        size: item.StickerSize || item.size,
        quantity: item.Quantity || item.quantity,
        type: item.StickerType || item.type,
        custom: item.custom,
        material: item.material,
      }));
      await userReq.post("/orders", {
        customer: userInfo,
        email: shipping.email,
        phone: shipping.phone,
        total: cart.total,
        deliveryAddress: shipping.shipping,
        details,
      });
      setProcessing(false);
      navigate("/success");
    }
  };

  return (
    <div className="card-custom-checkout">
      <HeaderPrimary headers={headers} />
      <div className="stripe-card">
        <CardNumberElement className="input" onChange={cardHandleChange} />
      </div>
      <div className="stripe-card">
        <CardExpiryElement className="input" onChange={cardHandleChange} />
      </div>
      <div className="stripe-card">
        <CardCvcElement className="input" onChange={cardHandleChange} />
      </div>
      {error && (
        <span className="warning error-message text-small">{error}</span>
      )}
      <div className="submit-container">
        <PrimaryButton
          text={processing ? "processing..." : "submit"}
          handleClick={handleCheckout}
        />
      </div>
    </div>
  );
};

export default CardCustomCheckout;
