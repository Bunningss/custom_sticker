import "./Product.css";
import { Link } from "react-router-dom";
import delivery from "../../assets/icons/delivery.png";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Product = ({ prod }) => {
  return (
    <div className="product">
      <Link to={`product/sticker/${prod._id}`}>
        <div className="product-image-wrapper">
          <img
            src={prod.img || prod.img[0]}
            alt=""
            className="product-image"
            loading="lazy"
          />
        </div>
        <div className="product-info">
          <h6 className="title">{prod.title}</h6>
          <div className="product-details">
            <div className="col col-1">
              <p className="text-small">Multiple sizes available</p>
              {/* <p className="text-small">Multiple sizes available</p> */}
            </div>
            <div className="col col-2">
              <img className="icon-small" src={delivery} alt="" />
            </div>
          </div>
          <div className="product-details">
            <div className="col">
              <p className="text-small">Price</p>
              <h6 className="title color-accent">${prod.twoQ_10000}+</h6>
            </div>
            <div className="col">
              <PrimaryButton text={"details"} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
