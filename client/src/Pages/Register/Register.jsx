import './Register.css';
import Header_Primary from '../../Components/Header_Primary/Header_Primary';
import FormInput from '../../Components/FormInput/FormInput';
import Primary_Button from '../../Components/Primary_Button/Primary_Button';

const Register = () => {

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
    // pattern: values.password
},
];

  return (
    <div className='register account'>
        <div className="wrapper">
            <Header_Primary headers={headers}/>
            <form className='form' action="">
                {
                    inputs.map((input, indx) => (
                        <FormInput {...input} key={indx}/>
                    ))
                }
                <Primary_Button text={"Continue"}/>
            </form>
        </div>
    </div>
  )
}

export default Register