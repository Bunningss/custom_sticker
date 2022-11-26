import "./EditOrder.css";
import { useEffect, useState } from "react";
import { userReq } from "../../../../Utilities/requestMethods";
import { useLocation } from "react-router-dom";
import PrimaryButton from "../../../../Components/PrimaryButton/PrimaryButton";
import Sidebar from "../../Components/Sidebar/Sidebar";

const EditOrder = () => {
  const [status, setStatus] = useState("");
  const [order, setOrder] = useState({});
  const location = useLocation();
  const id = location.pathname.split("/")[4];

  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await userReq.get(`orders/${id}`);
        setOrder(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrder();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await userReq.put(`orders/${id}`, { status });
      res.data && window.location.reload();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="edit-order default">
      <div className="row">
        <Sidebar />
      </div>
      <div className="row">
        <form className="order-status" onSubmit={handleSubmit}>
          <p className="title">Update Order Status</p>
          <div className="text-medium">
            Current Status: <span>{order.status}</span>
          </div>
          <select
            name="OrderStatus"
            className="input"
            required
            onChange={(e) => setStatus(e.target.value)}
            onInvalid={(e) =>
              e.target.setCustomValidity("Please Select Order Status")
            }
            onInput={(e) => e.target.setCustomValidity("")}
          >
            <option value="">Select order status</option>
            <option value="Pending">Pending</option>
            <option value="Production">In Production</option>
            <option value="Delivered">Delivered</option>
          </select>
          <PrimaryButton text={"update"} />
        </form>
      </div>
    </div>
  );
};

export default EditOrder;
