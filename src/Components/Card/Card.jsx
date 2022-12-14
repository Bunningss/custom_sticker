import "./Card.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";

const Card = ({ custom }) => {
  return (
    <div className="card">
      <Link className="card-link" to={`/customize/${custom.title}`}>
        <div className="col col-1">
          <h2 className="header">Custom {custom.title}</h2>
          <h2 className="header-medium">price ${custom.startPrice}+</h2>
        </div>
        <div className="col col-2">
          <div className="row row-1">
            <img
              className="custom-img"
              src={custom.img}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="row row-2">
            {custom.steps && (
              <p className="title">Custom {custom.title} in simple steps:</p>
            )}
            <ul className="card-list">
              {custom.steps &&
                custom.steps.map((step, indx) => (
                  <li className="card-list_item" key={indx}>
                    {step}
                  </li>
                ))}
            </ul>
            {custom.steps && <PrimaryButton text={"customize now!"} />}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
