import './Sidebar.css';
import ListItem from '../ListItem/ListItem';
import { navLinks } from '../../static';
import Primary_Button from '../Primary_Button/Primary_Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/userRedux';
import Secondary_Button from '../Secondary_Button/Secondary_Button';

const Sidebar = ({ active, setActive}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const handleClick = () => {
        navigate('/cart')
    };

    const handleLogout = () => {
        dispatch(logout())
    }

  return (
    <div className={active ? 'sidebar active' : 'sidebar' } onClick={() => setActive(!active)}>
        <div className="wrapper">
            <ul className="sidebar-list">
                {
                    navLinks.map((item, indx) => (
                        <ListItem item={item} key={indx}/>
                    ))
                }
                <Primary_Button text={"View cart"} handleClick={handleClick}/>
                {
                    user.currentUser &&
                    <Secondary_Button text={"Logout"} handleClick={handleLogout}/>
                }
            </ul>
        </div>
    </div>
  )
}

export default Sidebar