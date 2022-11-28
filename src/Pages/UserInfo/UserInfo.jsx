import "./UserInfo.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { userReq } from "../../Utilities/requestMethods";
import HeaderPrimary from "../../Components/HeaderPrimary/HeaderPrimary";
import SecondaryButton from "../../Components/SecondaryButton/SecondaryButton";

const User_Info = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const user = useSelector((state) => state.user);

  const headers = {
    small: "user information",
    large: "Update your personal information",
  };

  // Extract ID
  const info = user.currentUser?.others;
  const id = info && info._id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic
    try {
      Object.keys(values).forEach((key) => {
        if (values[key] === "") {
          delete values[key];
        }
      });
      await userReq.put(`/user/updateuser/${id}`, values);
      // window.location.reload();
    } catch (err) {
      setMessage("Invalid Request");
    }
  };

  return (
    <div className="user default">
      <div className="wrapper main-wrapper">
        <HeaderPrimary headers={headers} />
        <form action="" onSubmit={handleSubmit} className="form">
          <label htmlFor="name" className="inputLabel">
            Name
          </label>
          <input
            name="name"
            onChange={handleChange}
            placeholder={user.currentUser?.others?.name}
            type="text"
            className="input text-regular"
          />
          <label htmlFor="email" className="inputLabel">
            Email
          </label>
          <input
            name="email"
            placeholder={user.currentUser?.others?.email}
            type="email"
            className="input text-regular"
            onChange={handleChange}
          />
          {/* <label htmlFor="password" className="inputLabel">
            Password
          </label> */}
          {/* <input
            name="password"
            onChange={handleChange}
            placeholder={"********"}
            type="password"
            className="input text-regular"
          /> */}
          {message && (
            <p className="warning error-message text-small">{message}</p>
          )}
          <SecondaryButton text={"Update"} />
        </form>
      </div>
    </div>
  );
};

export default User_Info;
