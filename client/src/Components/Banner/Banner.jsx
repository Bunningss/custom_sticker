import './Banner.css';
import banner from '../../assets/Customizable.png';
import promo from '../../assets/promo.png';

const Banner = () => {
  return (
    <div className="banner-container">
      <img className='banner' src={banner} alt="" />
      <img src={promo} alt="" className="banner" />
    </div>
  )
}

export default Banner