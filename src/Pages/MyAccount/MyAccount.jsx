import "./MyAccount.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/userRedux";
import { Scroller } from "../../static";
import { useState, useEffect } from "react";
import { userReq } from "../../Utilities/requestMethods";
import HeaderPrimary from "../../Components/HeaderPrimary/HeaderPrimary";
import SecondaryButton from "../../Components/SecondaryButton/SecondaryButton";
import OrderItem from "../../Components/OrderItem/OrderItem";

const My_Account = () => {
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const id = user.currentUser?.others?._id;

  // Logout
  const handleClick = () => {
    dispatch(logout());
  };

  const headers = {
    small: "View Your Ordered Items",
    large: "Your Orders",
  };

  useEffect(() => {
    const getOrders = async () => {
      const res = await userReq.get(`orders/user/${id}`);
      setOrders(res.data);
    };
    getOrders();
  }, [id]);

  // load on top
  Scroller();

  return (
    <div className="my-account default">
      <div className="wrapper main-wrapper">
        <div className="greeting">
          <h2 className="header">
            Hello, <Link to="/update">{user.currentUser?.others?.name}</Link>{" "}
          </h2>
          <div className="logout-wrapper">
            {user.currentUser && (
              <SecondaryButton text={"logout"} handleClick={handleClick} />
            )}
          </div>
        </div>
        {/* Fetch Orders */}
        <div className="ongoing-orders">
          <HeaderPrimary headers={headers} />
          <div className="content">
            {orders.map((order, indx) => (
              <OrderItem order={order} key={indx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default My_Account;
