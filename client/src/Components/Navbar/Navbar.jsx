import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/custom-sticker.png';
import cart from '../../assets/icons/cart.png';
import ListItem from '../ListItem/ListItem';
import { navLinks } from '../../static';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="col col-1">
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
            <p className='widget'>0</p>
          </Link>
        </div>
        {/* <div className="col">contact</div> */}
      </div>
    </div>
  )
}

export default Navbar