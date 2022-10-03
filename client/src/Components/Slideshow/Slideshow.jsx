import './Slideshow.css';
import { images } from '../../static';

const Slideshow = ({ setModalImg }) => {
  return (
    <div className='slideshow'>
      {
        images.map((img, indx) => (
          <img className='slideshow-img' src={img} key={indx} onClick={() => setModalImg(img)} />
        ))
      }
    </div>
  )
}

export default Slideshow