import './My_Account.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/userRedux';
import Header_Primary from '../../Components/Header_Primary/Header_Primary';
import Secondary_Button from '../../Components/Secondary_Button/Secondary_Button';
import Order_Item from '../../Components/Order_Item/Order_Item';

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

  return (
    <div className='my-account default'>
      <div className="wrapper main-wrapper">
        <div className="greeting">
          <h2 className="header">Hello, <Link to='/update'>{user.currentUser.others.name}</Link> </h2>
          <div className="logout-wrapper">
            {
              user.currentUser &&
              <Secondary_Button text={"logout"} handleClick={handleClick}/>
            }
          </div>
        </div>
        {/* Active Orders */}
        <div className="ongoing-orders">
          <Header_Primary headers={headers}/>
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