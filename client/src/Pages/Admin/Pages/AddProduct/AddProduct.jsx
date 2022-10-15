import './AddProduct.css';
import { useState } from 'react';
import { Scroller } from '../../../../static';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { userReq } from '../../../../Utilities/requestMethods';
import app from '../../../../firebase';
import Sidebar from '../../Components/Sidebar/Sidebar';
import PrimaryButton from '../../../../Components/PrimaryButton/PrimaryButton';

const Edit_Product = () => {
  const [ message, setMessage ] = useState('');
  const [ values, setValues ] = useState({
    title: '',
    startPrice: '',
    maxPrice: '',
    desc: '',
  });
  const [ file, setFile ] = useState(null);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

// Actual Product Creation
  const createProduct = async (data) => {
    try {
      const res = await userReq.post('/products', data);
      setMessage(res.data.msg)
    } catch (err) {
      console.log('An error occured.');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const filename = new Date().getTime() + file.name;

//  Firebase Upload
    const storage = getStorage(app);
    const storageRef = ref(storage, filename);

    const uploadTask = uploadBytesResumable(storageRef, file);    
    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...values, img: downloadURL };
          createProduct(product);
        });
      }
    );
}

  // Load on top
  Scroller();
  return (
    <div className='edit-prod default'>
      <div className="row">
        <Sidebar/>
      </div>
      <div className="row">
        <div className="wrapper">
          <form action="" className="form" onSubmit={handleSubmit}>
            <input type="text" name='title' onChange={handleChange} className='input' placeholder='Product Title' required />
            <input type="number" step="0.01" name='startPrice' onChange={handleChange} className='input' placeholder='Display Price' required />
            <input type="number" step="0.01" name='maxPrice' onChange={handleChange} className='input' placeholder='Maximum Price' required />
            <textarea rows={5} type="text" name='desc' onChange={handleChange} className='input' placeholder='Product Details' required />
            <input type="file" className='input' required onChange={(e) => setFile(e.target.files[0])}/>
            {
              message && 
                <p className='success-message'>{message}</p>
            }
            <PrimaryButton text={"Add product"}/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Edit_Product