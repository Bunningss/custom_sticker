import './Cart_Item.css';
import demo from '../../assets/stickers/br-stc.png';

const Cart_Item = () => {
  return (
    <div className='cart-item'>
        <div className="row">
            <div className="img-wrapper">
                <img src={demo} alt="" className="cart-item-img" />
            </div>
        </div>
        <div className="row">
            <p className="text-small cart-item-text">transfer stickers</p>
            <li className="text-medium cart-item-text">3inx3in</li>
            <li className="text-medium cart-item-text">random cut</li>
            <li className="text-medium cart-item-text">1 color</li>
            <li className="text-medium cart-item-text">help with artwork</li>
            <li className="text-medium cart-item-text">delivery: 15days from order</li>
        </div>
        {/* Quantity */}
        <div className="row flex-row">
          Quantity: <span className='title'> — 2000</span>
        </div>
        <div className="row flex-row">
          Unit Price:
          <span className="title"> — 0.08$</span>
        </div>
        <div className="row flex-row">
          Total:
          <span className="title"> — 100$</span>
        </div>
    </div>
  )
}

export default Cart_Item