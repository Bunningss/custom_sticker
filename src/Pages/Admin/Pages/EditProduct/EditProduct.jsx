import "./EditProduct.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { publicReq, userReq } from "../../../../Utilities/requestMethods";
import { priceList } from "../../../../priceChart";
import Sidebar from "../../Components/Sidebar/Sidebar";
import PrimaryButton from "../../../../Components/PrimaryButton/PrimaryButton";

const EditProduct = () => {
  const [product, setProduct] = useState({});

  const id = useLocation().pathname.split("/")[4];
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicReq.get(`/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log("An error occured.");
      }
    };
    getProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());
    try {
      Object.keys(formData).forEach((key) => {
        if (formData[key] === "") {
          delete formData[key];
        }
      });
      await userReq.put(`/products/${id}`, formData);
      window.location.reload();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="edit-product default">
      <div className="col">
        <Sidebar />
      </div>
      <div className="col">
        <div className="wrapper">
          <div className="left">
            <img src={product.img} alt="" className="image" />
          </div>
          <div className="right">
            <form action="" className="form" onSubmit={handleSubmit}>
              <div className="form-wrapper">
                <div className="col">
                  <input
                    type="text"
                    className="input"
                    placeholder={product.title}
                    name="title"
                  />
                  {priceList.map((item, indx) => (
                    <input
                      type="number"
                      step="0.01"
                      className="input"
                      placeholder={item.placeholder}
                      name={item.name}
                      key={indx}
                    />
                  ))}
                </div>
                <div className="col">
                  <textarea
                    className="input"
                    name="desc"
                    placeholder="Enter new product description"
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
              <PrimaryButton text={"update product"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
