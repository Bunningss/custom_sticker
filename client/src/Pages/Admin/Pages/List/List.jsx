import './List.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Datatable from '../../Components/Datatable/Datatable';

const List = () => {
  return (
    <div className='list'>
      <div className="row">
        <Sidebar/>
      </div>
      <div className="row">
        <div className="wrapper">
          <Datatable/>
        </div>
      </div>
    </div>
  )
}

export default List