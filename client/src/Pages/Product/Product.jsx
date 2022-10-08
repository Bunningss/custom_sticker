import './Product.css';
import demo from '../../assets/stickers/br-stc.png';
import Primary_Button from '../../Components/Primary_Button/Primary_Button';
import Slideshow from '../../Components/Slideshow/Slideshow';
import Modal from '../../Components/Modal/Modal';
import { useState } from 'react';
import Select_Menu from '../../Components/Select_Menu/Select_Menu';
import Header_Primary from '../../Components/Header_Primary/Header_Primary';
import { custom, Scroller } from '../../static';
const Product = () => {
    const [ modalImg, setModalImg ] = useState(null);
    const headers = {
        small: "details",
        large: "product information"
    };

    // Always load page on top
    Scroller()
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
                    <h4 className="header-medium">Price Per Sticker - $0.08</h4>
                    <Slideshow modalImg={modalImg} setModalImg={setModalImg}/>
                    {/* Form starts here */}
                    <form action="" className="product-si-form">
                        <label className='text-regular' htmlFor="quantity">Select Quantity</label>
                        <input type="number" className='formInput text-regular' name='quantity' min='10'defaultValue='10' required />
                        {
                            custom.map((item, indx) => (
                                <Select_Menu item={item} key={indx}/>
                            ))
                        }
                        <Primary_Button text={"add to cart"}/>
                    </form>
                </div>
            </div>
        </div>
        <Header_Primary headers={headers}/>
    </div>
  )
}

export default Product