import './CardCustomCheckout.css';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { publicReq } from '../../../Utilities/requestMethods';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HeaderPrimary from '../../../Components/HeaderPrimary/HeaderPrimary';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const CardCustomCheckout = ({ shipping }) => {
    const [ processing, setProcessing ] = useState(false);
    const [ clientSecret, setClientSecret ] = useState(null);
    const [ error, setError ] = useState(null);
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const cart = useSelector((state) => state.cart);
    const cartItems = cart.products;

    useEffect(() => {
        const items = cartItems.map(item => ({ price: item.price, quantity: item.Quantity }));
        // const details = cartItems.map((item) => ({ productID: item._id, artwork: item.ArtworkFile, instruction: item.ArtworkInstruction, color: item.ImprintColor, size: item.StickerSize, quantity: item.Quantity, type: item.StickerType  }));

        if (shipping) {
            const body = {
                cartItems: items,
                shipping: {
                    name: shipping.name,
                    address: {
                        line1: shipping.shipping
                    }
                },
                description: "Product Description",
                receipt_email: shipping.email
            }

            const CustomCheckout = async () => {
                const res = await publicReq.post('/pay/create-payment-intent', body);
                setClientSecret(res.data.clientSecret);
            }
            CustomCheckout(); // Making the function call
        } else {
            return
        }
    }, [shipping, cartItems]);

    const headers = {
        small: 'payment information',
        large: "Enter your card details"
    };

    const cardHandleChange = (e) => {
        const { error } = e;
        setError(error ? error.message : '')
    };

    const handleCheckout = async (e) => {
        e.preventDefault();
        
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardNumberElement)
            }
        });
        if (payload.error) {
            setError(`Payment failed: ${payload.error.message}`)
        } else {
            const details = cartItems.map((item) => ({ productName: item.sticker || item.title, productID: item._id, artwork: item.ArtworkFile || item.artFile, instruction: item.ArtworkInstruction || item.art, color: item.ImprintColor, size: item.StickerSize || item.size, quantity: item.Quantity || item.quantity, type: item.StickerType || item.type, custom: item.custom,  }));
            await publicReq.post('/orders', {
                customer: shipping.email,
                total: cart.total,
                deliveryAddress: shipping.shipping,
                details
            });
            navigate('/success');
        }
    }

  return (
    <div className='card-custom-checkout'>
        <HeaderPrimary headers={headers}/>
        <div className="stripe-card">
            <CardNumberElement 
                className='card-element'
                onChange={cardHandleChange}
            />
        </div>
        <div className="stripe-card">
            <CardExpiryElement 
                className='card-element'
                onChange={cardHandleChange}
            />
        </div>
        <div className="stripe-card">
            <CardCvcElement 
                className='card-element'
                onChange={cardHandleChange}
            />
        </div>
        <div className="submit-container">
            <PrimaryButton text={'submit'} handleClick={handleCheckout}/>
        </div>
    </div>
  )
}

export default CardCustomCheckout