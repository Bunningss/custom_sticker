import './Forgot.css';
import { useState } from 'react';
import  { publicReq } from '../../../Utilities/requestMethods';
import HeaderPrimary from '../../../Components/HeaderPrimary/HeaderPrimary';
import SecondaryButton from '../../../Components/SecondaryButton/SecondaryButton';

const Forgot = () => {
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await publicReq.post('/auth/forgot', {email});
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
            <input type="email" required placeholder='Enter your email address' className='input text-regular' onChange={(e) => setEmail(e.target.value)} />
            <p className="warning error-message text-small">{message}</p>
            <SecondaryButton text={"continue"}/>
          </form>
        </div>
    </div>
  )
}

export default Forgot