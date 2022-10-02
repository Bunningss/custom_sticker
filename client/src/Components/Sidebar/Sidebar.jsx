import './Sidebar.css';
import ListItem from '../ListItem/ListItem';
import { navLinks } from '../../static';
import { useState, useEffect } from 'react';

const Sidebar = ({ active, setActive}) => {
    const [ height, setHeight ] = useState(0);
    const handleScroll = () => {
        setHeight(window.scrollY);
    }
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });
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