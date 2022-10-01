import './Banner.css';
import banner from '../../assets/Customizable.png';

const Banner = () => {
  return (
    <div className="banner-container">
      <img className='banner' src={banner} alt="" />
      <img src="https://static.customstickersnow.com/pay-later-jh34j3k5b-1920.jpg.webp" alt="" className="banner" />
    </div>
  )
}

export default Banner