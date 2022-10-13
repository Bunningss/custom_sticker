import './Widget.css';
import { Link } from 'react-router-dom';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Widget = ({ type }) => {
    let data;

    switch(type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See All Users",
                icon: (
                    <PersonOutlineOutlinedIcon className='icon'/>
                )
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "See All Orders",
                icon: (
                    <ShoppingCartOutlinedIcon className='icon'/>
                )
            };
            break;
        case "earnings":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "See All Earnings",
                icon: (
                    <MonetizationOnOutlinedIcon className='icon'/>
                )
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See Details",
                icon: (
                    <AccountBalanceOutlinedIcon className='icon'/>
                )
            };
            break;
            default:
                break;
    }

  return (
    <div className='widget'>
        <div className="left row">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"}200</span>
            <Link to='/' className="link">{data.link}</Link>
        </div>
        <div className="right row">
            <div className="percentage">
                <KeyboardArrowUpOutlinedIcon/>
                20%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget