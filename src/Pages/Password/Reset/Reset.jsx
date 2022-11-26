import "./Reset.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { publicReq } from "../../../Utilities/requestMethods";
import { Scroller } from "../../../static";
import HeaderPrimary from "../../../Components/HeaderPrimary/HeaderPrimary";
import SecondaryButton from "../../../Components/SecondaryButton/SecondaryButton";

const Reset = () => {
  const location = useLocation();
  const [message, setMessage] = useState("");
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
  });
  const [processing, setProcessing] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const resetLink = location.pathname.split("/")[2];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(false);

    try {
      const res = await publicReq.post("/auth/reset", {
        resetLink: resetLink,
        password: values.password,
      });
      setProcessing(false);
      setMessage(res.data.msg);
    } catch (err) {
      setProcessing(false);
      setMessage(err.response.data.msg);
    }
  };

  const headers = {
    small: "new password",
    large: "reset your password",
  };

  // load on top
  Scroller();

  return (
    <div className="reset account">
      <div className="wrapper">
        <HeaderPrimary headers={headers} />
        <form action="" className="form" onSubmit={handleSubmit}>
          <label htmlFor="password" className="inputLabel">
            Enter Password
          </label>
          <input
            type="password"
            name="password"
            required
            placeholder="Enter new password"
            className="input text-regular"
            minLength="8"
            onChange={handleChange}
          />
          <label htmlFor="password" className="inputLabel">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Enter new password"
            className="input text-regular"
            pattern={values.password}
            onChange={handleChange}
            onInvalid={(e) =>
              e.target.setCustomValidity("Passwords Do Not Match.")
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />
          <p className="error-message text-small warning">{message}</p>
          <SecondaryButton text={processing ? "processing" : "Continue"} />
        </form>
      </div>
    </div>
  );
};

export default Reset;
