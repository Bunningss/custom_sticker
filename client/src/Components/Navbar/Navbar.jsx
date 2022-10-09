import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import cart from '../../assets/icons/cart.png';
import ListItem from '../ListItem/ListItem';
import { navLinks } from '../../static';
import Hamburger from '../Hamburger/Hamburger';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/userRedux';

const Navbar = ({ active, setActive }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const quantity = useSelector(( state ) => state.cart);

  const handleClick = () => {
    dispatch(logout())
  };

  return (
    <div className='navbar'>
      {
        user.currentUser &&
        <h4 className="logout listItem" onClick={handleClick}>Logout</h4>
      }
      <div className="wrapper">
        <div className="col col-1" onClick={() => setActive(false)}>
          <Link to=''>
            <img className='logo' src={logo} alt="custom sticker" />
          </Link>
        </div>
        <div className="col col-2">
          <ul className='navlist'>
            {
              navLinks.map((item, indx) => (
                <ListItem item={item} key={indx}/>
              ))
            }
            
          </ul>
        </div>
        <div className="col col-3">
          <Link to='/cart'>
            <img className='icon-small' src={cart} alt="" />
            <p className='widget text-small'>{quantity.quantity}</p>
          </Link>
        </div>
        <div className="col col-4">
          <Hamburger active={active} setActive={setActive}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar