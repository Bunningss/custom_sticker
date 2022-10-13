import './Datatable.css';
import { DataGrid } from '@mui/x-data-grid';
import Primary_Button from '../../../../Components/Primary_Button/Primary_Button';
import Secondary_Button from '../../../../Components/Secondary_Button/Secondary_Button';
import demo from '../../../../assets/stickers/bum-stc.png';

const Datatable = () => {
const columns = [
{ field: 'id', headerName: 'ID', width: 70 },
// { field: 'lastName', headerName: 'Last name', width: 130 },
{
    field: "image",
    headerName: "Image",
    sortable: false,
    width: 130,
    renderCell: (params) => {
        return (
            <div className='table-image-wrapper'>
                <img className='table-image' src={params.row.image} alt="" />
            </div>
        )
    }
},
{ field: 'title', headerName: 'Product Title', width: 130 },
{
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 90,
},
];

const rows = [
{ id: 1, title: 'Custom Sticker', price: .35, image: demo },
{ id: 2, title: 'Custom Sticker', price: .42 },
{ id: 3, title: 'Custom Sticker', price: .45 },
{ id: 4, title: 'Custom Sticker', price: .16 },
{ id: 5, title: 'Custom Sticker', price: .08 },
{ id: 6, title: 'Metal Sticker', price: .150 },
{ id: 7, title: 'Custom Sticker', price: .44 },
{ id: 8, title: 'Custom Sticker', price: .36 },
{ id: 9, title: 'Custom Sticker', price: .65 },
];

//  Permanent Column
const actionColumn = [
    {
        field: "action",
        headerName: "Action",
        width: 250,
        renderCell: () => {
            return (
                <div className='cell-action'>
                    <Primary_Button text={"View"}/>
                    <Secondary_Button text={"Delete"}/>
                </div>
            )
        }
    }
]

  return (
    <div className='datatable' style={{ height: 800, width: '100%' }}>
    <DataGrid
        rowHeight={60}
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={15}
        rowsPerPageOptions={[5]}
        checkboxSelection
    />
    </div>
  )
}

export default Datatable