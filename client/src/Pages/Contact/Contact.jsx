import { useState } from 'react';
import './Contact.css';
import SecondaryButton from '../../Components/SecondaryButton/SecondaryButton';
import phone from '../../assets/icons/phone-green.png';
import email from '../../assets/icons/email-green.png';
import location from '../../assets/icons/location-green.png';

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
    <div className='contact default'>
      <div className="wrapper main-wrapper">
        <div className="row">
          <div className="col">
            <img src={phone} alt="" className="icon-small" />
            <p className='text-regular'>+987654321</p>
          </div>
          <div className="col">
            <img src={email} alt="" className="icon-small" />
            <p className='text-regular'>email@email.com</p>
          </div>
          <div className="col">
            <img src={location} alt="" className="icon-small" />
            <p className='text-regular'>4000 Greenbriar Dr, Ste 200, <br /> Stafford, TX 77477</p>
          </div>
        </div>
        <div className="row">
          <h2 className="header">contact us</h2>
          <form action="" onSubmit={handleSubmit} className="contact-form">
            <input name="name" placeholder='Enter Your Name' type="text" required className='form-input text-regular' onChange={handleChange} />
            <input name="email" placeholder='Enter Email Address' type="email" required className='form-input text-regular' onChange={handleChange} />
            <textarea name="message" placeholder='Enter Your Message'  required className='form-input text-regular' id="" cols="30" rows="10" onChange={handleChange}></textarea>
            <SecondaryButton text={"Send"}/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact