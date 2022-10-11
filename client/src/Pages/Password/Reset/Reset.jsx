import './Reset.css';
import Header_Primary from '../../../Components/Header_Primary/Header_Primary';
import { useState } from 'react';
import Secondary_Button from '../../../Components/Secondary_Button/Secondary_Button';

const Reset = () => {
  const [ values, setValues ] = useState({
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  };

  const headers = {
    small: 'new password',
    large: 'reset your password'
  }

  return (
    <div className='reset account'>
      <div className="wrapper">
        <Header_Primary headers={headers}/>
        <form action="" className="form">
          <label htmlFor="password" className='inputLabel'>Enter Password</label>
          <input type="password" name='password' required placeholder='Enter new password' className='input text-regular' minLength='8' onChange={handleChange}/>
          <label htmlFor="password" className='inputLabel'>Enter Password</label>
          <input type="password" name='confirmPassword' required placeholder='Enter new password' className='input text-regular' pattern={values.password} onChange={handleChange} onInvalid={(e) => e.target.setCustomValidity("Passwords Do Not Match.")} onInput={(e) => e.target.setCustomValidity("")}/>
          <Secondary_Button text={"Continue"}/>
        </form>
      </div>
    </div>
  )
}

export default Reset