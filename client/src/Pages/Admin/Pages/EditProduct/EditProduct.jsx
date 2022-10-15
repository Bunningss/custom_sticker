import './EditProduct.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { publicReq, userReq } from '../../../../Utilities/requestMethods';
import Sidebar from '../../Components/Sidebar/Sidebar';
import PrimaryButton from '../../../../Components/PrimaryButton/PrimaryButton';

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
                setProduct(res.data);
            } catch (err) {
                console.log('An error occured.');
            }
        };
        getProduct();
    }, [id]);

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await userReq.put(`/products/${id}`, { title: values.title === '' ? product.title : values.title, startPrice: values.startPrice === '' ? product.startPrice : values.startPrice, desc: values.desc === '' ? product.desc : values.desc });
            console.log(res.data)
        } catch (err) {
            console.log(err.message)
        }
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
                                <input type="number" min='0.01' step="0.01" className="input" placeholder={product.startPrice} name='startPrice' onChange={handleChange} />
                                <input type="number" min='0' step='0.01' className="input" placeholder={product.maxPrice} name='maxPrice' onChange={handleChange} />
                                {/* <input type="file" className="input" name='file' /> */}
                            </div>
                            <div className="col">
                                <textarea className='input' name="desc" onChange={handleChange} placeholder={product.desc || "Description"} id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <PrimaryButton text={"update product"}/>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditProduct