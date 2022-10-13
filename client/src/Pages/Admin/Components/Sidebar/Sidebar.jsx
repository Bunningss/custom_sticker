import './Sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className='dashboard'>
      <div className="col col-1">
        <span className="logo">admin</span>
      </div>
      <hr />
      <div className="col col-2">
        <ul>
            <p className="text-medium">MAIN</p>
            <li>
                <DashboardIcon className='icon'/>
                <span>Dashboard</span>
            </li>
            <p className="text-medium">LISTS</p>
            <li>
                <SupervisedUserCircleIcon className='icon'/>
                <span>Users</span>
            </li>
            <li>
                <WarehouseIcon className='icon'/>
                <span>Products</span>
            </li>
            <li>
                <CreditCardIcon className='icon'/>
                <span>Orders</span>
            </li>
            <li>
                <LocalShippingIcon className='icon'/>
                <span>Delivery</span>
            </li>
            <p className="text-medium">USEFUL LINKS</p>
            <li>
                <QueryStatsIcon className='icon'/>
                <span>Stats</span>
            </li>
            <li>
                <NotificationsActiveIcon className='icon'/>
                <span>Notifications</span>
            </li>
            <li>
                <SettingsApplicationsIcon className='icon'/>
                <span>Settings</span>
            </li>
            <p className="text-medium">USER</p>
            <li>
                <AccountBoxIcon className='icon'/>
                <span>Proile</span>
            </li>
            <li>
                <LogoutIcon className='icon'/>
                <span>Logout</span>
            </li>
        </ul>
      </div>
      <div className="col col-3">options</div>
    </div>
  )
}

export default Sidebar