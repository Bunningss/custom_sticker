import './MyAccount.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/userRedux';
import { Scroller } from '../../static';
import HeaderPrimary from '../../Components/HeaderPrimary/HeaderPrimary';
import SecondaryButton from '../../Components/SecondaryButton/SecondaryButton';
import OrderItem from '../../Components/OrderItem/OrderItem';

const My_Account = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  // Logout
  const handleClick = () => {
    dispatch(logout())
  };

  const headers = {
    small: 'View Your Ordered Items',
    large: 'Your Orders'
  }

  // load on top
  Scroller();

  return (
    <div className='my-account default'>
      <div className="wrapper main-wrapper">
        <div className="greeting">
          <h2 className="header">Hello, <Link to='/update'>{user.currentUser.others.name}</Link> </h2>
          <div className="logout-wrapper">
            {
              user.currentUser &&
              <SecondaryButton text={"logout"} handleClick={handleClick}/>
            }
          </div>
        </div>
        {/* Active Orders */}
        <div className="ongoing-orders">
          <HeaderPrimary headers={headers}/>
          <div className="content">
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default My_Account