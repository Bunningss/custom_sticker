import "./Order.css";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { userReq } from "../../../../Utilities/requestMethods";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../../Components/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../../../Components/SecondaryButton/SecondaryButton";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Order = () => {
  const [rows, setRows] = useState([]);

  const columns = [
    { field: "_id", headerName: "Order ID", width: 200 },
    {
      field: "customer",
      headerName: "Customer",
      sortable: false,
      width: 250,
    },
    { field: "createdAt", headerName: "Order Date", type: String, width: 200 },
    { field: "status", headerName: "Order Status", type: String, width: 200 },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      width: 150,
    },
  ];

  //  Permanent Column
  const actionColumn = [
    {
      sortable: false,
      field: "action",
      headerName: "Actions",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="cell-action">
            <Link to={`edit/${params.row._id}`}>
              <PrimaryButton text={"Edit status"} />
            </Link>
            <Link to={`/admin/orders/view/${params.row._id}`}>
              <SecondaryButton text={"view order"} />
            </Link>
          </div>
        );
      },
    },
  ];

  // Fetch orders from api
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userReq.get("/orders");
        setRows(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, []);

  return (
    <div className="order default">
      <div className="row">
        <Sidebar />
      </div>
      <div className="row">
        <DataGrid
          rowHeight={60}
          rows={rows}
          getRowId={(row) => row._id}
          columns={columns.concat(actionColumn)}
          pageSize={15}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Order;
