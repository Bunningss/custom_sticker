import './Login.css';
import FormInput from '../../Components/FormInput/FormInput';
import Header_Primary from '../../Components/Header_Primary/Header_Primary';
import Primary_Button from '../../Components/Primary_Button/Primary_Button';
import { Link, useNavigate } from 'react-router-dom';
import { publicReq } from '../../Utilities/requestMethods';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../../Redux/userRedux';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [ error, setError ] = useState('');
  const [ values, setValues ] = useState({
    email: '',
    password: ''
  });

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

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  // Login Logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await publicReq.post('/auth/login', values);
      dispatch(loginSuccess(res.data));
      navigate('/')
    } catch (err) {
      dispatch(loginFailure());
      setError(err.response.data.msg);
    }
  }

  return (
    <div className='login account default'>
      <div className="wrapper">
        <Header_Primary headers={headers}/>
        <form action="#" onSubmit={handleSubmit} className='form'>
          {
            inputs.map((input, indx) => (
              <FormInput {...input} key={indx} handleChange={handleChange}/>
            ))
          }
          {
            error && 
            <span className='warning error-message text-small'>{error}</span>
          }
          <Primary_Button text={"Sign In"} onClick={handleSubmit}/>
        </form>
        <div className="account-additional">
          <Link to=''>
            forgot password?
          </Link>
          <Link to='/register'>create an account</Link>
        </div>
      </div>
    </div>
  )
}

export default Login