import './FormInput.css';
import { useState } from 'react';
import { useRef } from 'react';

const FormInput = ( props ) => {
  const warningRef = useRef();
  const [ focused, setFocused ] = useState(false);
  const { errorMsg, handleChange, ...others } = props;

  const handleFocus = () => {
    setFocused(true)
  }

  setTimeout(() => {
    warningRef.current.style.display = "none";
  }, 10000);

  return (
    <>
      <label className='inputLabel' htmlFor=""></label>
      <input className='input text-regular' {...others} onChange={handleChange} onBlur={handleFocus} focused={focused.toString()} />
      <span ref={warningRef} className='warning text-small'>{errorMsg}</span>
    </>
  )
}

export default FormInput