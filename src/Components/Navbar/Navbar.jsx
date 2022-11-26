import "./Navbar.css";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import cart from "../../assets/icons/cart.png";
import ListItem from "../ListItem/ListItem";
import { navLinks } from "../../static";
import Hamburger from "../Hamburger/Hamburger";
import { logout } from "../../Redux/userRedux";

const Navbar = ({ active, setActive }) => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart);

  // Auto Logout
  const token = useSelector((state) => state.user);
  if (token.currentUser) {
    const decoded = jwt_decode(token.currentUser.accessToken);
    if (decoded.exp * 1000 < Date.now()) {
      dispatch(logout());
    }
  }

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="col col-1" onClick={() => setActive(false)}>
          <Link to="">
            <img className="logo" src={logo} alt="custom sticker" />
          </Link>
        </div>
        <div className="col col-2">
          <ul className="navlist">
            {navLinks.map((item, indx) => (
              <ListItem item={item} key={indx} />
            ))}
          </ul>
        </div>
        <div className="col col-3">
          <Link to="/cart">
            <img className="icon-small cart-icon" src={cart} alt="" />
            <p className="widget-n text-small">{quantity.quantity}</p>
          </Link>
        </div>
        <div className="col col-4">
          <Hamburger active={active} setActive={setActive} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
