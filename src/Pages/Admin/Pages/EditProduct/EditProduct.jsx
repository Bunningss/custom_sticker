import "./EditProduct.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { publicReq, userReq } from "../../../../Utilities/requestMethods";
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
    console.log(formData);
    try {
      await userReq.put(`/products/${id}`, {
        title: formData.title === "" || null ? product.title : formData.title,
        startPrice:
          formData.startPrice === "" || null
            ? product.startPrice
            : formData.startPrice,
        desc: formData.desc === "" || null ? product.desc : formData.desc,
      });
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
                  <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    className="input"
                    placeholder="Enter new display price"
                    name="startPrice"
                  />
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    className="input"
                    placeholder="Enter new maximum price"
                    name="maxPrice"
                  />
                  {/* <input type="file" className="input" name='file' /> */}
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
