import './Order.css';
import { DataGrid } from '@mui/x-data-grid';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { actionColumn } from '../../Components/Datatable/Datatable';
import { useEffect, useState } from 'react';
import { userReq } from '../../../../Utilities/requestMethods';

const Order = () => {
const [ rows, setRows ] = useState([]);

const columns = [
{ field: '_id', headerName: 'Customer ID', width: 70 },
{
    field: "customer",
    headerName: "Customer",
    sortable: false,
    width: 130,
},
{ field: 'createdAt', headerName: 'Order Date', type: String, width: 200 },
{
    field: 'total',
    headerName: 'Total',
    type: 'number',
    width: 150,
},
];

// Fetch orders from api
useEffect(() => {
  const getOrders = async () => {
    try {
      const res = await userReq.get('/orders')
      setRows(res.data);
    } catch (err) {
      console.log(err)
    }
  };
  getOrders();
}, []);

  return (
    <div className='order default'>
        <div className="row">
            <Sidebar/>
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
  )
}

export default Order