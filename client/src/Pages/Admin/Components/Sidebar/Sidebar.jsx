import './Sidebar.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../Redux/userRedux';

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
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout())
    };
  return (
    <div className='dashboard'>
      <div className="col col-1">
        <Link to='/admin'>
            <span className="logo">admin</span>
        </Link>
      </div>
      <hr />
      <div className="col col-2">
        <ul>
            <p className="text-medium">MAIN</p>
            <li>
                <Link to='/admin'>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </Link>
            </li>
            <p className="text-medium">LISTS</p>
            <li>
                <Link to=''>
                    <SupervisedUserCircleIcon className='icon'/>
                    <span>Users</span>
                </Link>
            </li>
            <li>
                <Link to='/admin/products'>
                    <WarehouseIcon className='icon'/>
                    <span>Products</span>
                </Link>
            </li>
            <li>
                <Link to=''>
                    <CreditCardIcon className='icon'/>
                    <span>Orders</span>
                </Link>
            </li>
            <li>
                <Link to=''>
                    <LocalShippingIcon className='icon'/>
                    <span>Delivery</span>
                </Link>
            </li>
            <p className="text-medium">USEFUL LINKS</p>
            <li>
                <Link to=''>
                    <QueryStatsIcon className='icon'/>
                    <span>Stats</span>
                </Link>
            </li>
            <li>
                <Link to=''>
                    <NotificationsActiveIcon className='icon'/>
                    <span>Notifications</span>
                </Link>
            </li>
            <li>
                <Link to=''>
                    <SettingsApplicationsIcon className='icon'/>
                    <span>Settings</span>
                </Link>
            </li>
            <p className="text-medium">USER</p>
            <li>
                <Link to=''>
                    <AccountBoxIcon className='icon'/>
                    <span>Proile</span>
                </Link>
            </li>
            <li onClick={handleLogout}>
                <Link to=''>
                    <LogoutIcon className='icon'/>
                    <span>Logout</span>
                </Link>
            </li>
        </ul>
      </div>
      <div className="col col-3">options</div>
    </div>
  )
}

export default Sidebar