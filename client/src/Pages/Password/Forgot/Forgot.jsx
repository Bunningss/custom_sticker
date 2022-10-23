import './Forgot.css';
import { useState } from 'react';
import  { publicReq } from '../../../Utilities/requestMethods';
import { Scroller } from '../../../static';
import HeaderPrimary from '../../../Components/HeaderPrimary/HeaderPrimary';
import SecondaryButton from '../../../Components/SecondaryButton/SecondaryButton';
import FormInput from '../../../Components/FormInput/FormInput';

const Forgot = () => {
  const [ message, setMessage ] = useState('');
  const [ processing, setProcessing ] = useState(false);

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
    setProcessing(true);
    const data = new FormData(e.target);
    const email = Object.fromEntries(data.entries());
    try {
      const res = await publicReq.post('/auth/forgot', email);
      setProcessing(false);
      setMessage(res.data.msg);
    } catch (err) {
      setProcessing(false);
      setMessage(err.response.data.msg);
    }
  };
  
  const headers = {
    small: 'forgot password',
    large: 'request new password'
  }

  // load on top
  Scroller();

  return (
    <div className='forgot account default'>
        <div className="wrapper main-wrapper">
          <HeaderPrimary headers={headers}/>
          <form action="" onSubmit={handleSubmit} className='form'>
            <FormInput {...input}/>
            <p className="warning error-message text-small">{message}</p>
            <SecondaryButton text={processing ? "processing..." : "continue"}/>
          </form>
        </div>
    </div>
  )
}

export default Forgot