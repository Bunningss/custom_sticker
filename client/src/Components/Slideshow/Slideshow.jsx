import './Slideshow.css';

const Slideshow = ({ setModalImg, images }) => {
  return (
    <div className='slideshow'>
      { images &&
        images.map((img, indx) => (
          <img className='slideshow-img' src={img} key={indx} onClick={() => setModalImg(img)} loading='lazy' />
        ))
      }
    </div>
  )
}

export default Slideshow