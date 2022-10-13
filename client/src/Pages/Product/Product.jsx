import './Product.css';
import demo from '../../assets/stickers/br-stc.png';
import Primary_Button from '../../Components/Primary_Button/Primary_Button';
import Slideshow from '../../Components/Slideshow/Slideshow';
import Modal from '../../Components/Modal/Modal';
import { useState, useEffect } from 'react';
import Select_Menu from '../../Components/Select_Menu/Select_Menu';
import Header_Primary from '../../Components/Header_Primary/Header_Primary';
import { custom, Scroller } from '../../static';
import { publicReq } from '../../Utilities/requestMethods';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/cartRedux';

const Product = () => {
    const dispatch = useDispatch();

    const [ product, setProduct ] = useState({});
    const [ modalImg, setModalImg ] = useState(null);
    const [ values, setValues ] = useState({
        Quantity: "",
        StickerType: "",
        StickerSize: "",
        ImprintColors: "",
        ArtworkType: "",
        ArtworkFile: "",
        ArtworkInstruction: "",
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
    }, [values.ArtworkType]);

    const id = useLocation().pathname?.split('/')[3]
    
    // Fetch product from server
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicReq.get(`/products/${id}`)
                setProduct(res.data)
            } catch (err) {
                console.log(err.message)
            } 
        }
        getProduct();
    }, [id]);

    // Add to cart
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(addProduct({
            serial: Math.random() * 10000 + 20000,...product, ...values, price: Number((values.Quantity * product.startPrice).toFixed(2))
        }))
    }
    // Always load page on top
    Scroller()

  return (
    <div className='product-si default'>
        {
            modalImg && <Modal modalImg={modalImg} setModalImg={setModalImg}/>
        }
        <div className="wrapper">
            <div className="col">
                <img src={product.img} alt="" className="product-si-img" loading='lazy' />
            </div>
            <div className="col">
                <div className="product-si-info">
                    <h2 className="header">Die cut stickers</h2>
                    <h4 className="header-medium">Price Per Sticker - $0.08</h4>
                    <Slideshow modalImg={modalImg} setModalImg={setModalImg} images={product.img}/>
                    {/* Form starts here */}
                    <form action="" onSubmit={handleClick} className="product-si-form">
                        <label className='text-regular' htmlFor="quantity">Select Quantity</label>
                        <input type="number" className='input text-regular' name='Quantity' min='10' max='10000' required onInvalid={(e) => e.target.setCustomValidity("Quantity Must Be Greater Than 10 And Less Than 10000")} onInput={(e) => e.target.setCustomValidity('')} onChange={handleChange}/>
                        {
                            custom.map((item, indx) => (
                                <Select_Menu item={item} key={indx} values={values} setValues={setValues}/>
                            ))
                        }
                        {
                            values.ArtworkType === 'Upload Artwork' &&
                            <input type="file" onChange={handleChange} name='ArtworkFile' className='input text-regular' required onInvalid={(e) => e.target.setCustomValidity("Please upload your artwork")} onInput={(e) => e.target.setCustomValidity("")}/>
                        }
                        {
                            values.ArtworkType === 'Help With Artwork' &&
                            <textarea type="text" rows='5' onChange={handleChange} name='ArtworkInstruction' className="input text-regular" required placeholder='Provide Artwork Instructions' onInvalid={(e) => e.target.setCustomValidity("Please provide artwork instruction.")} onInput={(e) => e.target.setCustomValidity("")}/>
                        }
                        <Primary_Button text={"add to cart"} />
                    </form>
                </div>
            </div>
        </div>
        <Header_Primary headers={headers}/>
        <p className="text-medium product-details">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas repudiandae minima, iusto voluptatem molestiae dolorem soluta eos magni unde laudantium! Odio nostrum officiis fugit dicta, veniam iure blanditiis sit sequi quibusdam quam quaerat iusto, cupiditate exercitationem totam. Possimus, dolorem? Quidem accusantium vitae repellat accusamus nisi cupiditate necessitatibus soluta! Nesciunt tempora optio laudantium voluptas quo? Quibusdam nemo optio laudantium animi ipsum ut ullam magnam culpa quod, impedit enim voluptatum voluptatibus officiis, dolore necessitatibus itaque nulla, ea ipsa illo commodi odio. Nesciunt eos minus atque obcaecati culpa doloribus illo doloremque ab assumenda tenetur maxime libero cum quo fuga velit vel consequuntur similique ut aliquid praesentium, iste asperiores. Eaque omnis at, velit quia animi porro maxime nobis voluptatibus reprehenderit architecto accusamus voluptates, rem amet natus quas qui? Accusantium maiores quaerat tenetur ut perspiciatis harum ex reprehenderit, veniam iusto maxime aliquid accusamus vero cum autem quam esse soluta eligendi! Est molestiae velit magnam repellat? Autem velit, sequi reiciendis sunt dolorem sint voluptatem ipsam? Quod, veritatis, facilis consequuntur illo sapiente id praesentium pariatur laudantium velit repellat nam veniam omnis assumenda ut, nesciunt cum in. At quaerat fugiat sit ducimus! Expedita cum nam nihil qui impedit ratione dignissimos earum, dolorem optio eligendi rem commodi quia iure.
        </p>
    </div>
  )
}

export default Product