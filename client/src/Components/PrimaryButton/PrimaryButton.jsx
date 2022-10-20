import './PrimaryButton.css';

const Primary_Button = ({ text, handleClick }) => {
  return (
    <button className='btn-primary button' onClick={handleClick}>
        {text}
    </button>
  )
}

export default Primary_Button