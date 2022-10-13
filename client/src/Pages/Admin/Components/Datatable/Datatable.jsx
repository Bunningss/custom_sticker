import './Datatable.css';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import { publicReq } from '../../../../Utilities/requestMethods';
import Primary_Button from '../../../../Components/Primary_Button/Primary_Button';
import Secondary_Button from '../../../../Components/Secondary_Button/Secondary_Button';
import demo from '../../../../assets/stickers/bum-stc.png';
import { useEffect, useState } from 'react';

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
console.log(rows)

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


// const rows = [
// { id: 1, title: 'Custom Sticker', price: .35, image: demo },
// { id: 2, title: 'Custom Sticker', price: .42, image: demo },
// { id: 3, title: 'Custom Sticker', price: .45, image: demo },
// { id: 4, title: 'Custom Sticker', price: .16 ,image: demo },
// { id: 5, title: 'Custom Sticker', price: .08, image: demo },
// { id: 6, title: 'Metal Sticker', price: .150, image: demo },
// { id: 7, title: 'Custom Sticker', price: .44, image: demo },
// { id: 8, title: 'Custom Sticker', price: .36, image: demo },
// { id: 9, title: 'Custom Sticker', price: .65, image: demo },
// ];

//  Permanent Column
const actionColumn = [
    {
        sortable: false,
        field: "action",
        headerName: "Actions",
        width: 300,
        renderCell: (params) => {
            return (
                <div className='cell-action'>
                    <Link to={`edit/${params.row._id}`}>
                        <Primary_Button text={"View"} />
                    </Link>
                    <Secondary_Button text={"Delete"}/>
                </div>
            )
        }
    }
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