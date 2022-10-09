import './Register.css';
import Header_Primary from '../../Components/Header_Primary/Header_Primary';
import FormInput from '../../Components/FormInput/FormInput';
import Primary_Button from '../../Components/Primary_Button/Primary_Button';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { publicReq } from '../../Utilities/requestMethods';

const Register = () => {
const navigate = useNavigate();

const [ error, setError ] = useState('');
const [ values, setValues ] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
})

const headers = {
    small: 'Register',
    large: 'Create an account with us'
} 

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
    pattern: values.password
},
];

const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
}

const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        await publicReq.post("/auth/register", values)
        navigate('/login')
    } catch (err) {
        setError(err.response.data.msg)
    }
}

  return (
    <div className='register account default'>
        <div className="wrapper">
            <Header_Primary headers={headers}/>
            <form className='form' onSubmit={handleSubmit} action="">
                {
                    inputs.map((input, indx) => (
                        <FormInput {...input} key={indx} handleChange={handleChange}/>
                    ))
                }
                {
                    error && 
                    <span className='warning error-message text-small'>{error}</span>
                }
                <Primary_Button text={"Continue"}/>
            </form>
            <div className="account-additional">
                <Link to='/login'>Already have an account? Login Instead</Link>
            </div>
        </div>
    </div>
  )
}

export default Register