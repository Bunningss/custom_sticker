import './Cart.css';
import Cart_Item from '../../Components/Cart_Item/Cart_Item';
import Header_Alternate from '../../Components/Header_Alternate/Header_Alternate';
import Header_Primary from '../../Components/Header_Primary/Header_Primary';

const Cart = () => {
  const header = {
    small: 'View Your Items',
    large: 'Shopping Cart'
  }
  return (
    <div className='cart default'>
      <div className="wrapper main-wrapper">
        <Header_Alternate headers={header}/>
        {/* <Header_Primary headers={header}/> */}
        <div className="cart-content">
          <Cart_Item/>
          <Cart_Item/>
          <Cart_Item/>
          <Cart_Item/>
          <Cart_Item/>
          <Cart_Item/>
        </div>
      </div>
    </div>
  )
}

export default Cart