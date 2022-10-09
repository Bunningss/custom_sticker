import './Sidebar.css';
import ListItem from '../ListItem/ListItem';
import { navLinks } from '../../static';
import Primary_Button from '../Primary_Button/Primary_Button';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ active, setActive}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/cart')
    };

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
            </ul>
        </div>
    </div>
  )
}

export default Sidebar