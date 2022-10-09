import './Banner.css';
import banner from '../../assets/banner.png';
import promo from '../../assets/tagline.png';

const Banner = () => {
  return (
    <div className="banner-container">
      <img className='banner' src={banner} alt="" />
      <img src={promo} alt="" className="banner" />
    </div>
  )
}

export default Banner