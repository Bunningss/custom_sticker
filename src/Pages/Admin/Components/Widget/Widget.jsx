import "./Widget.css";
import { Link } from "react-router-dom";

// Icons
import balance from "../../../../assets/icons/balance.png";
import money from "../../../../assets/icons/money.png";
import shopping_cart from "../../../../assets/icons/shopping_cart.png";
import user from "../../../../assets/icons/user.png";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See All Users",
        icon: <img src={user} alt="" className="icon" />,
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "See All Orders",
        icon: <img src={shopping_cart} alt="" className="icon" />,
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "See All Earnings",
        icon: <img src={money} alt="" className="icon" />,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See Details",
        icon: <img src={balance} alt="" className="icon" />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left row">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}200</span>
        <Link to="/" className="link">
          {data.link}
        </Link>
      </div>
      <div className="right row">
        <div className="percentage">
          {/* <img src={arrow} alt='' className='extra-small'/>
                20% */}
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
