import { Link } from 'react-router-dom';
import './ListItem.css';

const ListItem = ({ item }) => {
  return (
    <li className='listitem'>
        <Link to={item.href}>{item.title}</Link>
    </li>
  )
}

export default ListItem