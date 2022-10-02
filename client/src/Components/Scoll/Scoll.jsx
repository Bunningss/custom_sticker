import './Scoll.css';
import arrow from '../../assets/icons/arrow.png';
import { useState, useEffect } from 'react';

const Scoll = () => {
  const [ height, setHeight ] = useState(0);
  const screenTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  };
    const handleScroll = () => {
        setHeight(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });
  return (
    <div className={height >= 200 ? 'scroll visible' : 'scroll'} onClick={screenTop}>
        <img className='icon-small' src={arrow} alt="" />
    </div>
  )
}

export default Scoll