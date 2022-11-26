import "./HeaderAlternate.css";

const Header_Alternate = ({ headers }) => {
  return (
    <div className="header-alternate">
      <h1 className="header-wrapper">
        <div className="header-content">
          <h2 className="header">{headers.large}</h2>
          <h4 className="header-medium">{headers.small}</h4>
        </div>
      </h1>
    </div>
  );
};

export default Header_Alternate;
