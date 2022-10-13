import './Add_Product.css';
import { Scroller } from '../../../../static';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Primary_Button from '../../../../Components/Primary_Button/Primary_Button';

const Edit_Product = () => {

  // Load on top
  Scroller();
  return (
    <div className='edit-prod default'>
      <div className="row">
        <Sidebar/>
      </div>
      <div className="row">
        <div className="wrapper">
          <form action="" className="form">
            <input type="text" className='input' placeholder='Product Title' required />
            <input type="number" className='input' placeholder='Product Price' required />
            <textarea rows={5} type="text" className='input' placeholder='Product Details' required />
            <input type="file" className='input' required />
            <Primary_Button text={"Add product"}/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Edit_Product