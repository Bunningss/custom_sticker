import './Forgot.css';
import { useState } from 'react';
import  { publicReq } from '../../../Utilities/requestMethods';
import HeaderPrimary from '../../../Components/HeaderPrimary/HeaderPrimary';
import SecondaryButton from '../../../Components/SecondaryButton/SecondaryButton';
import FormInput from '../../../Components/FormInput/FormInput';

const Forgot = () => {
  const [ message, setMessage ] = useState('');

  const input = {
    name: 'email',
    type: 'email',
    required: true,
    minLength: 10,
    placeholder: 'Enter your email address',
    errorMsg: "Enter a valid email address"
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = Object.fromEntries(data.entries());
    try {
      const res = await publicReq.post('/auth/forgot', email);
      setMessage(res.data.msg);
    } catch (err) {
      setMessage(err.response.data.msg);
    }
  };
  
  const headers = {
    small: 'forgot password',
    large: 'request new password'
  }

  return (
    <div className='forgot account default'>
        <div className="wrapper main-wrapper">
          <HeaderPrimary headers={headers}/>
          <form action="" onSubmit={handleSubmit} className='form'>
            <FormInput {...input}/>
            <p className="warning error-message text-small">{message}</p>
            <SecondaryButton text={"continue"}/>
          </form>
        </div>
    </div>
  )
}

export default Forgot