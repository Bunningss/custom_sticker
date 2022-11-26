import "./HeaderPrimary.css";

const Header_Primary = ({ headers }) => {
  const { small, large } = headers;
  return (
    <div className="header-primary">
      {small && <h6 className="header-small"> — {headers.small}</h6>}
      {large && <h2 className="header">{headers.large}</h2>}
    </div>
  );
};

export default Header_Primary;
