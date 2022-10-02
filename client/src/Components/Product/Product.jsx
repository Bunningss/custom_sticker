import './Product.css';
import { Link } from 'react-router-dom';
import delivery from '../../assets/icons/delivery.png';
import Primary_Button from '../Primary_Button/Primary_Button';

const Product = () => {
  return (
    <div className='product'>
        <Link to=''>
            <div className="product-image-wrapper">
                <img src="https://static.customstickersnow.com/fit-in/400x400/option_20210715-5825fc00-e52f-11eb-8e5c-67c378e35993.png.webp" alt="" className="product-image" />
            </div>
            <div className="product-info">
                <h6 className="title">Transfer Stickers</h6>
                <div className="product-details">
                    <div className="col col-1">
                        <p className="text-small">Multiple sizes available</p>
                        <p className="text-small">Multiple sizes available</p>
                    </div>
                    <div className="col col-2">
                        <img className='icon-small' src={delivery} alt="" />
                    </div>
                </div>
                <div className="product-details">
                    <div className="col">
                        <p className="text-small">Price</p>
                        <h6 className="title color-accent">$0.08+</h6>
                    </div>
                    <div className="col">
                        <Primary_Button text={"customize"}/>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Product