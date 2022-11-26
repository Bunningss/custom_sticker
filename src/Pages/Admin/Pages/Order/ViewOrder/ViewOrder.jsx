import "./ViewOrder.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { userReq } from "../../../../../Utilities/requestMethods.js";
import { useState } from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import OrderItem from "../../../Components/OrderItem/OrderItem";

const ViewOrder = () => {
  const [order, setOrder] = useState({});
  const location = useLocation();
  const id = location.pathname.split("/")[4];

  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await userReq.get(`/orders/${id}`);
        setOrder(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getOrder();
  }, [id]);

  return (
    <div className="view-order default">
      <div className="row">
        <Sidebar />
      </div>
      <div className="row wrapper">
        <div className="order">
          <p className="text-medium">
            Order Date - <span>{new Date(order.createdAt).toDateString()}</span>
          </p>
          <p className="text-medium">
            Customer - <span>{order.customer}</span>
          </p>
          <p className="text-medium">
            Order Status - <span>{order.status}</span>
          </p>
          <p className="text-medium">
            Order Total - <span>{order.total}$</span>
          </p>
          <p className="text-medium">
            Delivery Address - <span>{order.deliveryAddress}</span>
          </p>
          <p className="text-medium">
            Email Address - <span>{order.email}</span>
          </p>
          <p className="text-medium">
            Phone Number - <span>{order.phone}</span>
          </p>
          {order.details &&
            order.details.map((item, indx) => (
              <OrderItem item={item} key={indx} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
