import './Sidebar.css';
import { navLinks } from '../../static';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/userRedux';
import ListItem from '../ListItem/ListItem';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

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
                <PrimaryButton text={"View cart"} handleClick={handleClick}/>
                {
                    user.currentUser &&
                    <SecondaryButton text={"Logout"} handleClick={handleLogout}/>
                }
            </ul>
        </div>
    </div>
  )
}

export default Sidebar