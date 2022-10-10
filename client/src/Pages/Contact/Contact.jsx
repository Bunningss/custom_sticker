import './Contact.css';
import Secondary_Button from '../../Components/Secondary_Button/Secondary_Button';
import { useState } from 'react';

const Contact = () => {
  const [ values, setValues ] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {}

  return (
    <div className='contact'>
      <div className="wrapper main-wrapper">
        <div className="row"></div>
        <div className="row">
          <h2 className="header">contact us</h2>
          <form action="" onSubmit={handleSubmit} className="contact-form">
            <input name="name" placeholder='Enter Your Name' type="text" required className='form-input text-regular' onChange={handleChange} />
            <input name="email" placeholder='Enter Email Address' type="email" required className='form-input text-regular' onChange={handleChange} />
            <textarea name="message" placeholder='Enter Your Message'  required className='form-input text-regular' id="" cols="30" rows="10" onChange={handleChange}></textarea>
            <Secondary_Button text={"Send"}/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact