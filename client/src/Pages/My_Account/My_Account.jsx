import './My_Account.css';
import Header_Alternate from '../../Components/Header_Alternate/Header_Alternate';
import Secondary_Button from '../../Components/Secondary_Button/Secondary_Button';
import Cart_Item from '../../Components/Cart_Item/Cart_Item';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/userRedux';
import Order_Item from '../../Components/Order_Item/Order_Item';

const My_Account = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(logout())
  };

  const headers = {
    small: 'View Your Ordered Items',
    large: 'Your Orders'
  }

  const headers_1 = {
    small: 'Previously Ordered Items',
    large: 'Your Orders'
  }

  return (
    <div className='my-account'>
      <div className="wrapper main-wrapper">
        <div className="greeting">
          <h2 className="header">Hello, {user.currentUser.others.name}</h2>
          <div className="logout-wrapper">
            {
              user.currentUser &&
              <Secondary_Button text={"logout"} handleClick={handleClick}/>
            }
          </div>
        </div>
        {/* Active Orders */}
        <div className="ongoing-orders">
          <Header_Alternate headers={headers}/>
          <div className="content">
            <Order_Item/>
            <Order_Item/>
            <Order_Item/>
            <Order_Item/>
            <Order_Item/>
            <Order_Item/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default My_Account