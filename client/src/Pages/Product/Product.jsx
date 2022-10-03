import './Product.css';
import demo from '../../assets/prod.webp';
import Primary_Button from '../../Components/Primary_Button/Primary_Button';
import Slideshow from '../../Components/Slideshow/Slideshow';
import Modal from '../../Components/Modal/Modal';
import { useState } from 'react';

const Product = () => {
    const [ modalImg, setModalImg ] = useState(null);
  return (
    <div className='product-si default'>
        {
            modalImg && <Modal modalImg={modalImg} setModalImg={setModalImg}/>
        }
        <div className="wrapper">
            <div className="col">
                <img src={demo} alt="" className="product-si-img" />
            </div>
            <div className="col">
                <div className="product-si-info">
                    <h2 className="header">Die cut stickers</h2>
                    <h4 className="header-medium">0.08$</h4>
                    <Slideshow modalImg={modalImg} setModalImg={setModalImg}/>
                    <div className="product-quantity">10</div>
                    <Primary_Button text={"add to cart"}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product