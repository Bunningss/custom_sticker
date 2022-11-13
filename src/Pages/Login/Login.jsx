import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { publicReq } from '../../Utilities/requestMethods';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../../Redux/userRedux';
import { Scroller } from '../../static';
import FormInput from '../../Components/FormInput/FormInput';
import HeaderPrimary from '../../Components/HeaderPrimary/HeaderPrimary';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ processing, setProcessing ] = useState(false);
  
  const [ error, setError ] = useState('');

  const headers = {
    small: 'login',
    large: 'sign into your account'
  };

  const inputs = [
    {
      name: "email",
      type: "email",
      placeholder: "Email address",
      required: true,
      errorMsg: "Enter a valid email address"
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true,
      minLength: 8,
      errorMsg: "Minimum 8 characters"
    },
  ];

  // Login Logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const data = new FormData(e.target); // Get data from form
    const formData = Object.fromEntries(data.entries()); // Get data from form
    dispatch(loginStart());
    try {
      const res = await publicReq.post('/auth/login', formData);
      dispatch(loginSuccess(res.data));
      setProcessing(false);
      navigate('/');
      window.location.reload();
    } catch (err) {
      setProcessing(false);
      dispatch(loginFailure());
      setError(err.response.data.msg);
    }
  };

  //load on top
  Scroller();

  return (
    <div className='login account default'>
      <div className="wrapper">
        <HeaderPrimary headers={headers}/>
        <form action="#" onSubmit={handleSubmit} className='form'>
          {
            inputs.map((input, indx) => (
              <FormInput {...input} key={indx}/>
            ))
          }
          {
            error && 
            <span className='warning error-message text-small'>{error}</span>
          }
          <PrimaryButton text={processing ? "processing..." : "Sign In"} onClick={handleSubmit}/>
        </form>
        <div className="account-additional">
          <Link to='/forgot'>
            forgot password?
          </Link>
          <Link to='/register'>create an account</Link>
        </div>
      </div>
    </div>
  )
}

export default Login