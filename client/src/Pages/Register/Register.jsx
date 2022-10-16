import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { publicReq } from '../../Utilities/requestMethods';
import HeaderPrimary from '../../Components/HeaderPrimary/HeaderPrimary';
import FormInput from '../../Components/FormInput/FormInput';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';

const Register = () => {
const navigate = useNavigate();

const [ error, setError ] = useState('');

const headers = {
    small: 'Register',
    large: 'Create an account with us'
};

const inputs = [
{
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Full Name",
    required: true,
    minLength: 5,
    errorMsg: "Enter Your Full Name"
},
{
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email address",
    required: true,
    errorMsg: "Enter a valid email address"
},
{
    id: 3,
    name: "password",
    type: "password",
    placeholder: "Password",
    required: true,
    minLength: 8,
    errorMsg: "Minimum 8 characters"
},
{
    id: 4,
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm password",
    required: true,
    errorMsg: "Passwords do not match",
},
];

const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());
    if (formData.password !== formData.confirmPassword) {
        return setError("Passwords do not match");
    } else {
        try {
            await publicReq.post("/auth/register", formData)
            navigate('/login')
        } catch (err) {
            setError(err.response.data.msg)
        }
    }
}

  return (
    <div className='register account default'>
        <div className="wrapper">
            <HeaderPrimary headers={headers}/>
            <form className='form' onSubmit={handleSubmit} action="">
                {
                    inputs.map((input, indx) => (
                        <FormInput {...input} key={indx}/>
                    ))
                }
                {
                    error && 
                    <span className='warning error-message text-small'>{error}</span>
                }
                <PrimaryButton text={"Continue"}/>
            </form>
            <div className="account-additional">
                <Link to='/login'>Already have an account? Login Instead</Link>
            </div>
        </div>
    </div>
  )
}

export default Register