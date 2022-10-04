import './Card.css';
import Primary_Button from '../Primary_Button/Primary_Button';
import { Link } from 'react-router-dom';
import demo from '../../assets/br-stc.png';

const Card = () => {
  return (
    <div className='card'>
      <Link className='card-link' to='/customize/sticker'>
        <div className="col col-1">
          <h2 className="header">Custom stickers</h2>
          <h2 className='header-medium'>price $0.22+</h2>
        </div>
        <div className="col col-2">
          <div className="row row-1">
            <img className='custom-img' src={demo} alt="" loading='lazy' />
          </div>
          <div className="row row-2">
            <p className="title">Custom sticker in 6 simple steps:</p>
            <ul className='card-list'>
              <li className='card-list_item'>Select sticker</li>
              <li className='card-list_item'>Select sticker type</li>
              <li className='card-list_item'>Select sticker size</li>
              <li className='card-list_item'>Select material type</li>
              <li className='card-list_item'>Upload artwork</li>
              <li className='card-list_item'>Place order</li>
            </ul>
            <Primary_Button text={'customize now!'}/>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card