import './Cart.css';
import Cart_Item from '../../Components/Cart_Item/Cart_Item';
import Header_Alternate from '../../Components/Header_Alternate/Header_Alternate';
import { useSelector } from 'react-redux';

const Cart = () => {
  const header = {
    small: 'View Your Items',
    large: 'Shopping Cart'
  }
  const cart = useSelector(( state ) => state.cart)
  
  return (
    <div className='cart default'>
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
    </div>
  )
}

export default Cart