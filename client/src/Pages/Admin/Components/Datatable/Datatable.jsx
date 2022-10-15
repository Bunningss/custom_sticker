import './Datatable.css';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { publicReq, userReq } from '../../../../Utilities/requestMethods';
import Primary_Button from '../../../../Components/Primary_Button/Primary_Button';
import Secondary_Button from '../../../../Components/Secondary_Button/Secondary_Button';

//  Permanent Column
export const actionColumn = [
    {
        sortable: false,
        field: "action",
        headerName: "Actions",
        width: 300,
        renderCell: (params) => {

            const handleDelete = async () => {
                try {
                    await userReq.delete(`/products/${params.row._id}`);
                    window.location.reload();
                } catch (err) {
                    console.log(err)
                }
            };
            
            return (
                <div className='cell-action'>
                    <Link to={`edit/${params.row._id}`}>
                        <Primary_Button text={"Edit"} />
                    </Link>
                    <p  onClick={handleDelete}>
                        <Secondary_Button text={"Delete"}/>
                    </p>
                </div>
            )
        }
    }
];

const Datatable = () => {
const [ rows, setRows ] = useState([]);
const navigate = useNavigate();

useEffect(() => {
    const getProducts = async () => {
        try {
            const res = await publicReq.get("/products")
            setRows(res.data)
        } catch (err) {
            console.log("An error occured.")
        }
    };
    getProducts()
}, []);


const columns = [
{ field: '_id', headerName: 'ID', width: 70 },
{
    field: "img",
    headerName: "Image",
    sortable: false,
    width: 130,
    renderCell: (params) => {
        return (
            <div className='table-image-wrapper'>
                <img className='table-image' src={params.row.img} alt="" />
            </div>
        )
    }
},
{ field: 'title', headerName: 'Product Title', width: 200 },
{
    field: 'startPrice',
    headerName: 'Price',
    type: 'number',
    width: 150,
},
];

const handleClick = () => {
    navigate('/admin/products/new')
}

  return (
    <div className='datatable' style={{ height: 800, width: '100%' }}>
        <DataGrid
            rowHeight={60}
            rows={rows}
            getRowId={(row) => row._id}
            columns={columns.concat(actionColumn)}
            pageSize={15}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
        <Primary_Button text={"add new product"} handleClick={handleClick}/>
    </div>
  )
}

export default Datatable