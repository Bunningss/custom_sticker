import './EditOrder.css';
import { useState } from 'react';
import Primary_Button from '../../../../Components/Primary_Button/Primary_Button';
import Sidebar from '../../Components/Sidebar/Sidebar';

const EditOrder = () => {
    const [ status, setStatus ] = useState('');

  return (
    <div className='edit-order default'>
        <div className="row">
            <Sidebar/>
        </div>
        <div className="row">
            <form className="order-status">
                <p className="title">Update Order Status</p>
                <div className="text-medium">Current Status: <span>Production</span></div>
                <select name="OrderStatus" className='input'>
                    <option value="Pending">Pending</option>
                    <option value="Production">In Production</option>
                    <option value="Delivered">Delivered</option>
                </select>
                <Primary_Button text={"update"}/>
            </form>
        </div>
    </div>
  )
}

export default EditOrder