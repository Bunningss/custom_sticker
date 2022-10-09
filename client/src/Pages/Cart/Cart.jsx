import './Cart.css';
import { Scroller } from '../../static';
import Cart_Item from '../../Components/Cart_Item/Cart_Item';
import Header_Alternate from '../../Components/Header_Alternate/Header_Alternate';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Secondary_Button from '../../Components/Secondary_Button/Secondary_Button';

const Cart = () => {
  const navigate = useNavigate();
  const header = {
    small: 'Review Your Items',
    large: 'Shopping Cart'
  }
  const cart = useSelector(( state ) => state.cart);

  const handleClick = () => {
    navigate('/')
  };

  // Always load on top
  Scroller()
  return (
    <div className='cart default'>
      {
        cart.quantity > 0 &&
        <div className="wrapper main-wrapper">
          <Header_Alternate headers={header}/>
          {/* <Header_Primary headers={header}/> */}
          <div className="cart-content">
            {
              cart.products.map((item, indx) => (
                <Cart_Item key={indx} item={item}/>
              ))
            }
          </div>
        </div>
      }
      {
        cart.quantity === 0 &&
        <div className="wrapper empty main-wrapper">
          <div className="content">
            <h4>404</h4>
            <h6>Items not Found!</h6>
          </div>
          <div className="content">
            <Secondary_Button text={"Continue Shopping"} handleClick={handleClick}/>
          </div>
        </div>
      }
    </div>
  )
}

export default Cart