import './CustomCheckout.css';
import { useState } from 'react';
import { Scroller } from '../../static';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import CardCustomCheckout from './CardCustomCheckout/CardCustomCheckout';

const CustomCheckout = () => {
  const [ step, setStep ] = useState(false);
  const [ error, setError ] = useState('');
  const [ values, setValues ] = useState({
    name: '',
    email: '',
    shipping: ''
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.shipping !== '' || values.name !== '' || values.email !== '') {
      if (values.shipping.split('').length > 15) {
        setStep(true)
      } else {
        setError("Enter a valid address.")
      }
    }
  }

  // load on top
  Scroller();

  return (
    <div className='custom-checkout'>
      { !step &&
          <form className="form" onSubmit={handleSubmit}>
              <input type="text" onChange={handleChange} name='name' required placeholder='Enter Full Name Here' className="input text-regular" />
              <input type="email" onChange={handleChange} name='email' required placeholder='Enter Email Address' className="input text-regular" />
              <input type="text" onChange={handleChange} name='shipping' required placeholder='Enter Shipping Address' className="input text-regular" />
              <PrimaryButton text={"continue"}/>
          </form>
      }
        {
          step &&
            <CardCustomCheckout shipping={values}/>
        }
    </div>
  )
}

export default CustomCheckout