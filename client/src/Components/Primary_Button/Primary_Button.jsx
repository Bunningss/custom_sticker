import './Primary_Button.css';
import { Link } from 'react-router-dom';

const Primary_Button = ({ text, handleClick }) => {
  return (
    <button className='btn-primary button' onClick={handleClick}>
        {text}{/* <Link to=''>{text}</Link> */}
    </button>
  )
}

export default Primary_Button