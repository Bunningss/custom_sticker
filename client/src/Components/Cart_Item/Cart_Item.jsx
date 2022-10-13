import './Cart_Item.css';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../Redux/cartRedux';

const Cart_Item = ({ item }) => {
  const dispatch = useDispatch();

  // Remove from cart
  const handleClick = () => {
    dispatch(removeProduct({ serial: item.serial, price: item.price }))
  };

  return (
    <div className='cart-item'>
        <div className="row">
            <div className="img-wrapper">
                <img src={item.img} alt="" className="cart-item-img" />
            </div>
        </div>
        <div className="row">
            <p className="text-small cart-item-text">{item.title || item.sticker + " " + 'Sticker'}</p>
            <li className="text-medium cart-item-text">{item.StickerSize || item.size}</li>
            <li className="text-medium cart-item-text">{item.StickerType || "Sticker type —" + " " + item.type}</li>
            <li className="text-medium cart-item-text">{item.ImprintColors || "Material —" + " " + item.material}</li>
            <li className="text-medium cart-item-text">{item.ArtworkType || "Custom Design"}</li>
            <li className="text-medium cart-item-text">delivery: 15days from order</li>
        </div>
        {/* Quantity */}
        <div className="row flex-row">
          Quantity: <span className='title'> — {item.Quantity || item.quantity}</span>
        </div>
        <div className="row flex-row">
          Unit Price:
          <span className="title"> — {item.startPrice}$</span>
        </div>
        <div className="row flex-row">
          Total:
          <span className="title"> — {item.price}$</span>
        </div>
        <button className="button btn-warning" onClick={handleClick}>remove</button>
    </div>
  )
}

export default Cart_Item