import "./Error.css";
import { Scroller } from "../../static";

const Error = () => {
  // Always load page on top
  Scroller();

  return (
    <div className="error default">
      <div className="content">
        <h4>404</h4>
        <h6>This page could not be found.</h6>
      </div>
    </div>
  );
};

export default Error;
