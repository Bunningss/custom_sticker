import './Forgot.css';
import Header_Primary from '../../../Components/Header_Primary/Header_Primary';
import Secondary_Button from '../../../Components/Secondary_Button/Secondary_Button';
import { useState } from 'react';

const Forgot = () => {
  const [ email, setEmail ] = useState('');

  const handleSubmit = (e) => {
    // Logics
  };

  
  const headers = {
    small: 'forgot password',
    large: 'request new password'
  }

  return (
    <div className='forgot account default'>
        <div className="wrapper main-wrapper">
          <Header_Primary headers={headers}/>
          <form action="" onSubmit={handleSubmit} className='form'>
            <input type="email" required placeholder='Enter your email address' className='input text-regular' onChange={(e) => setEmail(e.target.value)} />
            <Secondary_Button text={"continue"}/>
          </form>
        </div>
    </div>
  )
}

export default Forgot