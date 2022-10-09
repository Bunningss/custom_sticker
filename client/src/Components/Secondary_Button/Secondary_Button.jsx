import './Secondary_Button.css';

const Secondary_Button = ({ text, handleClick }) => {
  return (
    <div className='btn-secondary button' onClick={handleClick} >{text}</div>
  )
}

export default Secondary_Button