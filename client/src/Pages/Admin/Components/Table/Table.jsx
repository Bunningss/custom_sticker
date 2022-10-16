import "./Table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { userReq } from '../../../../Utilities/requestMethods';
import { useState } from "react";

const List = () => {
  const [ rows, setRows ] = useState([])

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userReq.get('/orders?recent=recent')
        setRows(res.data)
      } catch (err) {
        console.log(err)
      }
    };
    getOrders();
  }, []);

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Order ID</TableCell>
            {/* <TableCell className="tableCell">Product</TableCell> */}
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Order</TableCell>
            <TableCell className="tableCell">Order Amount</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row._id}</TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.createdAt}</TableCell>
              <TableCell className="tableCell">{row.total}$</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;