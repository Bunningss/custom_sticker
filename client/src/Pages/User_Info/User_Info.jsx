import './User_Info.css';
import Header_Primary from '../../Components/Header_Primary/Header_Primary';
import Secondary_Button from '../../Components/Secondary_Button/Secondary_Button';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const User_Info = () => {

    const [ values, setValues ] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const user = useSelector(( state ) => state.user);

    const headers = {
        small: "user information",
        large: "Update your personal information"
    };

    const handleSubmit = (e) => {
        // Logic
    };
    
  return (
    <div className='user default'>
        <div className="wrapper main-wrapper">
            <Header_Primary headers={headers}/>
            <form action="" onSubmit={handleSubmit} className="form">
                <label htmlFor="name" className='inputLabel'>Name</label>
                <input name='name' onChange={handleChange} placeholder={user.currentUser.others.name} type="text" className="input text-regular" />
                <label htmlFor="email" className='inputLabel'>Email</label>
                <input name='email' placeholder={user.currentUser.others.email} type="email" className="input text-regular" disabled style={{ cursor: 'not-allowed'}} />
                <label htmlFor="password" className='inputLabel'>Password</label>
                <input name='password' onChange={handleChange} placeholder={'********'} type="password" className="input text-regular" />
                <Secondary_Button text={"Update"}/>
            </form>
        </div>
    </div>
  )
}

export default User_Info