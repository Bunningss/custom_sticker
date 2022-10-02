import './Sidebar.css';
import ListItem from '../ListItem/ListItem';
import { navLinks } from '../../static';

const Sidebar = ({ active, setActive}) => {
  return (
    <div className={active ? 'sidebar active' : 'sidebar' } onClick={() => setActive(!active)}>
        <div className="wrapper">
            <ul className="sidebar-list">
                {
                    navLinks.map((item, indx) => (
                        <ListItem item={item} key={indx}/>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Sidebar