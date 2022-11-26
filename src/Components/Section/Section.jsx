import HeaderPrimary from "../HeaderPrimary/HeaderPrimary";
import Product from "../Product/Product";
import "./Section.css";
const Section = (props) => {
  const { headers, prods } = props;
  return (
    <div className="section">
      <HeaderPrimary headers={headers} />
      <div className="section-content">
        {prods.map((prod, indx) => (
          <Product prod={prod} key={indx} />
        ))}
      </div>
    </div>
  );
};

export default Section;
