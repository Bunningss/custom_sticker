import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/custom-sticker.png';
import cart from '../../assets/icons/cart.png';
import ListItem from '../ListItem/ListItem';
import { navLinks } from '../../static';
import Hamburger from '../Hamburger/Hamburger';
import { getheight } from '../../static';

const Navbar = ({ active, setActive }) => {
  const h = getheight();
  return (
    <div className={ h >= 200 ? 'navbar shrunk' : 'navbar'}>
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
            <p className='widget text-small'>6</p>
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