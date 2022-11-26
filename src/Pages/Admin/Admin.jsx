import "./Admin.css";
import Sidebar from "../Admin/Components/Sidebar/Sidebar";
import Widget from "./Components/Widget/Widget";
import Table from "./Components/Table/Table";

const Admin = () => {
  return (
    <div className="admin default">
      <div className="wrapper">
        <div className="row row-1">
          <Sidebar />
        </div>
        <div className="row row-2">
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earnings" />
            <Widget type="balance" />
          </div>
          <div className="table-list">
            <h4 className="list-title">Latest Transactions</h4>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
