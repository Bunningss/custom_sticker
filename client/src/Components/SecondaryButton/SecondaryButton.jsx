import './SecondaryButton.css';

const Secondary_Button = ({ text, handleClick }) => {
  return (
    <button className='btn-secondary button' onClick={handleClick} >{text}</button>
  )
}

export default Secondary_Button