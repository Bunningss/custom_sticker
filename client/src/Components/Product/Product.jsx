import './Product.css';
import { Link } from 'react-router-dom';
import demo_icon from '../../assets/icons/cart.png';

const Product = () => {
  return (
    <div className='product'>
        <Link to=''>
            <div className="product-image-wrapper">
                <img src="https://static.customstickersnow.com/fit-in/324x324/product_20210716-cdbcb900-e680-11eb-8b08-d7f6203b752f.png.webp" alt="" className="product-image" />
            </div>
            <div className="product-info">
                <h6 className="title">Transfer Stickers</h6>
                <div className="product-details">
                    <div className="col col-1">
                        <p className="text-small">Multiple sizes available</p>
                        <p className="text-small">Multiple sizes available</p>
                    </div>
                    <div className="col col-2">
                        <img className='icon-small' src={demo_icon} alt="" />
                    </div>
                </div>
                <div className="product-details">
                    <div className="col">
                        <p className="text-small">Price</p>
                        <h6 className="title color-accent">$0.08+</h6>
                    </div>
                    <div className="col">
                        <img src="" alt="" className="icon-small" />
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Product