import './Sticker.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sSticker, circleSize, squareSize, rectangleSize, sType, sMaterial, customSize, Scroller } from '../../static';
import { addProduct } from '../../Redux/cartRedux';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import app from '../../firebase';
import CustomCard from '../../Components/CustomCard/CustomCard';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import Float from '../../Components/Float/Float';

const Sticker = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ processing, setProcessing ] = useState(false);

  const [ sizeData, setSizeData ] = useState([]);

  const [ size, setSize ] = useState({
    height: '',
    width: ''
  });

  const [ values, setValues ] = useState({
    sticker: '',
    type: '',
    size: '',
    Quantity: '',
    material: '',
    artworkInstuction: '',
    artworkType: '',
    startPrice: 0.24,
    custom: true,
    _id: Math.random() * 10000 + 20000
  });
  const [ selected, setSelected ] = useState('');

  const [ file, setFile ] = useState(null);

  // Update Size Selection Card
  useEffect(() => {
    if (selected === 'circle') {
      setSizeData(circleSize)
    } else if (selected === 'square') {
      setSizeData(squareSize)
    } else if (selected === 'rectangle') {
      setSizeData(rectangleSize)
    } else if (selected === 'custom') {
      setSizeData(customSize)
    }
  },[selected]);
  
  // Reset selections on sticker change
  useEffect(() => {
    setSize({...size, ['height']: '', ["width"]: ''})
    setValues({...values, ['size']: ''})
    setValues({...values, ['Quantity']: ''})
  }, [values.sticker]);

  // Reset quantity on size change
  useEffect(() => {
    setValues({ ...values, ['Quantity']: '' })
  },[values.size]);

  // Add to cart
  const handleClick = (e) => {
    e.preventDefault();
    setProcessing(true);

    //  Firebase Upload
    if (file && (values.sticker || values.size || values.type || values.Quantity || values.Quantity > 50 || values.material)) {
        const filename = new Date().getTime() + file.name;
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
                default:
            }
        }, 
        (error) => {
            // Handle unsuccessful uploads
            setProcessing(false)
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            //  Add to cart logic
            if (!values.sticker || !values.size || !values.type || !values.Quantity || values.Quantity < 50 || !values.material) {
              return
            } else {
              dispatch(addProduct({ serial: Math.random() * 10000 + 20000, ...values, artworkFile: downloadURL, price: Number((values.Quantity * values.startPrice).toFixed(2)) }))
            };
                navigate('/cart');
            });
        }
    );
  } else {
    if (!values.sticker || !values.size || !values.type || !values.Quantity || values.Quantity < 50 || !values.material || !values.artworkType) {
        return
      } else {
        dispatch(addProduct({ serial: Math.random() * 10000 + 20000, ...values, price: Number((values.Quantity * values.startPrice).toFixed(2)) }))
      };
  }


  }

  // Always load on page top
  Scroller()

  return (
    <form className='main-wrapper sticker default' onSubmit={handleClick}>
      <Float values={values} size={size}/>
      <div className="content">
        {/* Select Sticker */}
        <section className='section-step'>
          <div className="section-header">
            <h2 className="header">Select Sticker</h2>
          </div>
          <div className="section-content">
            {
              sSticker.map((s, indx) => (
                <CustomCard info={s} key={indx} values={values} setValues={setValues} active={selected === s.name} setActive={setSelected}/>
              ))
            }
          </div>
        </section>
        {/* Select Sticker Type */}
        <section className='section-step'>
          <div className="section-header">
            <h2 className="header">Select Sticker type</h2>
          </div>
          <div className="section-content">
            {
              sType.map((s, indx) => (
                <CustomCard info={s} key={indx} values={values} setValues={setValues} active={selected === s.name} setActive={setSelected}/>
              ))
            }
          </div>
        </section>
        {/* Select Sticker Size */}
        <section className='section-step'>
          <div className="section-header">
            <h2 className="header">Select Sticker size</h2>
          </div>
          <div className="section-content">
            {
              sizeData.map((s, indx) => (
                <CustomCard info={s} key={indx} values={values} setValues={setValues} active={selected === s.name} setActive={setSelected} size={size} setSize={setSize}/>
              ))
            }
          </div>
        </section>
        {/* Select Material Type */}
        <section className='section-step'>
          <div className="section-header">
            <h2 className="header">Select Sticker Material</h2>
          </div>
          <div className="section-content">
            {
              sMaterial.map((s, indx) => (
                <CustomCard info={s} key={indx} values={values} setValues={setValues} active={selected === s.name} setActive={setSelected}/>
              ))
            }
          </div>
        </section>
      </div>
      <div className="artwork">
        <select name="artworkType" id="" className="input" onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} required>
          <option value="">Select Artwork</option>
          <option value="instruction">Provide Instructions</option>
          <option value="upload">Upload Artwork</option>
        </select>
        {
          values.artworkType === 'instruction' &&
          <textarea required name="artworkInstuction" onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} className='input' id="" cols="30" rows="10" placeholder='Provide artwork instructions'></textarea>
        }
        {
          values.artworkType === 'upload' &&
          <input required type="file" onChange={(e) => setFile(e.target.files[0])} className="input" />
        }
      </div>
      <PrimaryButton text={"Add to cart"}/>
    </form>
  )
}

export default Sticker