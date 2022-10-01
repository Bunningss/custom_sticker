import './Login.css';
import FormInput from '../../Components/FormInput/FormInput';
import Header_Primary from '../../Components/Header_Primary/Header_Primary';
import Primary_Button from '../../Components/Primary_Button/Primary_Button';

const Login = () => {

  const headers = {
    small: 'login',
    large: 'sign into your account'
  }

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

  const handleSubmit = () => {
    // Logic
    console.log('submitted')
  }

  return (
    <div className='login account'>
      <div className="wrapper">
        <Header_Primary headers={headers}/>
        <form action="#" onSubmit={handleSubmit} className='form'>
          {
            inputs.map((input, indx) => (
              <FormInput {...input} key={indx}/>
            ))
          }
          <Primary_Button text={"Sign In"} onClick={handleSubmit}/>
        </form>
      </div>
    </div>
  )
}

export default Login