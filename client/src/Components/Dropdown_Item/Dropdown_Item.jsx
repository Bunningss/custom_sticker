import { useState } from 'react';
import './Dropdown_Item.css';

const Dropdown_Item = ({ faq }) => {
  const [ vis, setVis ] = useState(false);
  const toggle = () => {
    setVis(!vis)
  }
  return (
    <div className='dropdown-item'>
      <div className={vis ? "dropdown-q vis" : "dropdown-q"} onClick={toggle}>
        <p className="header-medium dropdown-text">{faq.ques}</p>
      </div>
      <div className={vis ? "dropdown-a vis" : "dropdown-a"}>
        <li className="text-regular dropdown-text">{faq.ans}</li>
      </div>
    </div>
  )
}

export default Dropdown_Item