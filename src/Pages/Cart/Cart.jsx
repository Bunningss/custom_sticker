import "./Cart.css";
import { Scroller } from "../../static";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "../../Components/SecondaryButton/SecondaryButton";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import CartItem from "../../Components/CartItem/CartItem";
import HeaderAlternate from "../../Components/HeaderAlternate/HeaderAlternate";

const Cart = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user)?.currentUser?.others;

  const header = {
    small: "Review Your Items",
    large: "Shopping Cart",
  };

  const cart = useSelector((state) => state.cart);

  const handleClick = () => {
    navigate("/");
  };

  const handleNavigation = () => {
    navigate("/login");
  };

  // Handle Checkout
  const handleCheckout = async (e) => {
    e.preventDefault();

    // Custom Checkout Logic
    navigate("/checkout");
  };
  // Always load on top
  Scroller();
  return (
    <div className="cart default">
      {cart.quantity > 0 && (
        <div className="wrapper main-wrapper">
          <HeaderAlternate headers={header} />
          <div className="cart-content">
            {cart.products.map((item, indx) => (
              <CartItem key={indx} item={item} />
            ))}
            <h4 className="title cart-total">
              Total Amount - {Number(cart.total).toFixed(2)}$
            </h4>
          </div>
          {user ? (
            <form action="" onSubmit={handleCheckout}>
              <PrimaryButton text={"Checkout"} />
            </form>
          ) : (
            <SecondaryButton
              text={"login to proceed to checkout"}
              handleClick={handleNavigation}
            />
          )}
        </div>
      )}
      {cart.quantity === 0 && (
        <div className="wrapper empty main-wrapper">
          <div className="content">
            <h4>404</h4>
            <h6>No Items Found!</h6>
          </div>
          <div className="content">
            <SecondaryButton
              text={"Continue Shopping"}
              handleClick={handleClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
