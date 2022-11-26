import { Link } from "react-router-dom";
import "./ListItem.css";

const ListItem = ({ item }) => {
  return (
    <li className="listitem text-regular">
      {item.icon && <img src={item.icon} alt="" className="icon-small" />}
      <Link to={item.href}>{item.title}</Link>
    </li>
  );
};

export default ListItem;
