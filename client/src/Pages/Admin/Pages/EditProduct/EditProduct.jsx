import './EditProduct.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { publicReq } from '../../../../Utilities/requestMethods';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Primary_Button from '../../../../Components/Primary_Button/Primary_Button';

const EditProduct = () => {
    const [ product, setProduct ] = useState({});
    const id = useLocation().pathname.split('/')[4];

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicReq.get(`/products/${id}`)
                setProduct(res.data)
            } catch (err) {
                console.log('An error occured.')
            }
        };
        getProduct();
    }, [id]);

  return (
    <div className='edit-product default'>
        <div className="col">
            <Sidebar/>
        </div>
        <div className="col">
            <div className="wrapper">
                <div className="left">
                    <img src={product.img} alt="" className="image" />
                </div>
                <div className="right">
                    <form action="" className='form'>
                        <div className="form-wrapper">
                            <div className="col">
                                <input type="text" className="input" placeholder={product.title} name='' />
                                <input type="text" className="input" placeholder={product.startPrice} name='' />
                                <input type="file" className="input" name='' />
                            </div>
                            <div className="col">
                                <textarea className='input' name="" placeholder={product.desc || "Description"} id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <Primary_Button text={"update product"}/>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditProduct