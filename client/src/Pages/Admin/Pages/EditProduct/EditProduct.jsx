import './EditProduct.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { publicReq, userReq } from '../../../../Utilities/requestMethods';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Primary_Button from '../../../../Components/Primary_Button/Primary_Button';

const EditProduct = () => {
    const [ product, setProduct ] = useState({});
    const [ values, setValues ] = useState({
        title: '',
        startPrice: '',
        desc: ''
    });
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

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     const res = await userReq.put(`/products/${id}`, {values});
        //     console.log(res)
        // } catch (err) {
        //     console.log(err.message)
        // }
    }

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
                    <form action="" className='form' onSubmit={handleSubmit}>
                        <div className="form-wrapper">
                            <div className="col">
                                <input type="text" className="input" placeholder={product.title} name='title' onChange={handleChange} />
                                <input type="text" className="input" placeholder={product.startPrice} name='startPrice' onChange={handleChange} />
                                <input type="file" className="input" name='file' />
                            </div>
                            <div className="col">
                                <textarea className='input' name="desc" onChange={handleChange} placeholder={product.desc || "Description"} id="" cols="30" rows="10"></textarea>
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