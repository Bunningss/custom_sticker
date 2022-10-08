import './Product.css';
import demo from '../../assets/stickers/br-stc.png';
import Primary_Button from '../../Components/Primary_Button/Primary_Button';
import Slideshow from '../../Components/Slideshow/Slideshow';
import Modal from '../../Components/Modal/Modal';
import { useState } from 'react';
import Select_Menu from '../../Components/Select_Menu/Select_Menu';
import Header_Primary from '../../Components/Header_Primary/Header_Primary';
import { custom, Scroller } from '../../static';
import { useEffect } from 'react';
const Product = () => {
    const [ modalImg, setModalImg ] = useState(null);
    const [ values, setValues ] = useState({
        Quantity: "",
        StickerType: "",
        StickerSize: "",
        ImprintColors: "",
        ArtworkType: "",
        ArtworkFile: "",
        ArtworkInstruction: ""
    });

    const headers = {
        small: "details",
        large: "product information"
    };

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

    // Reset artwork file and instruction on artwork type change
    useEffect(() => {
        setValues({...values, ["ArtworkFile"]: ''})
        setValues({...values, ["ArtworkInstruction"]: ''})
    }, [values.ArtworkType])

    // Always load page on top
    Scroller()

  return (
    <div className='product-si default'>
        {
            modalImg && <Modal modalImg={modalImg} setModalImg={setModalImg}/>
        }
        <div className="wrapper">
            <div className="col">
                <img src={demo} alt="" className="product-si-img" loading='lazy' />
            </div>
            <div className="col">
                <div className="product-si-info">
                    <h2 className="header">Die cut stickers</h2>
                    <h4 className="header-medium">Price Per Sticker - $0.08</h4>
                    <Slideshow modalImg={modalImg} setModalImg={setModalImg}/>
                    {/* Form starts here */}
                    <form action="" t className="product-si-form">
                        <label className='text-regular' htmlFor="quantity">Select Quantity</label>
                        <input type="number" className='formInput text-regular' name='Quantity' min='10' max='10000' required onInvalid={(e) => e.target.setCustomValidity("Quantity must be greater than 10 and less than 10000")} onInput={(e) => e.target.setCustomValidity('')} onChange={handleChange}/>
                        {
                            custom.map((item, indx) => (
                                <Select_Menu item={item} key={indx} values={values} setValues={setValues}/>
                            ))
                        }
                        {
                            values.ArtworkType === 'UPLOAD' &&
                            <input type="file" onChange={handleChange} name='ArtworkFile' className='formInput text-regular' required onInvalid={(e) => e.target.setCustomValidity("Please upload your artwork")} onInput={(e) => e.target.setCustomValidity("")}/>
                        }
                        {
                            values.ArtworkType === 'HELP' &&
                            <input type="text" onChange={handleChange} name='ArtworkInstruction' className="formInput text-regular" required placeholder='Provide Artwork Instructions' onInvalid={(e) => e.target.setCustomValidity("Please provide artwork instruction.")} onInput={(e) => e.target.setCustomValidity("")}/>
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