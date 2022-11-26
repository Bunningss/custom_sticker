import "./Success.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../Redux/cartRedux";
const Success = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, []);

  return (
    <div className="success">
      <div className="wrapper">
        <h4 className="header">congratualtions</h4>
        <h2 className="title">Order Was Successful!</h2>
      </div>
    </div>
  );
};

export default Success;
