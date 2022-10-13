import './Edit_Product.css';
import Sidebar from '../../Components/Sidebar/Sidebar';

const Edit_Product = () => {
  return (
    <div className='edit-prod'>
      <div className="row">
        <Sidebar/>
      </div>
      <div className="row">
        <div className="wrapper">
          <form action="" className="form">
            <input type="text" className='input' placeholder='' required />
            <input type="text" className='input' placeholder='' required />
            <input type="text" className='input' placeholder='' required />
            <input type="text" className='input' placeholder='' required />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Edit_Product