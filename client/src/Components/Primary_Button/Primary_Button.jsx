import './Primary_Button.css';
import { Link } from 'react-router-dom';

const Primary_Button = ({ text }) => {
  return (
    <button className='btn-primary button'>
        <Link to=''>{text}</Link>
    </button>
  )
}

export default Primary_Button