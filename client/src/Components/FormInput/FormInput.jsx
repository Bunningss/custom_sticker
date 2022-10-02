import './FormInput.css';
import { useState } from 'react';

const FormInput = ( props ) => {
  const [ focused, setFocused ] = useState(false);
  const { errorMsg, ...others } = props;
  const handleFocus = () => {
    setFocused(true)
  }
  return (
    <>
      <label className='inputLabel' htmlFor=""></label>
      <input className='formInput text-regular' {...others} onBlur={handleFocus} focused={focused.toString()} />
      <span className='warning text-small'>{errorMsg}</span>
    </>
  )
}

export default FormInput