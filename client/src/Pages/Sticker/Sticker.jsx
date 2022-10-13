import './Sticker.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sSticker, circleSize, squareSize, rectangleSize, sType, sMaterial, customSize, Scroller } from '../../static';
import { addProduct } from '../../Redux/cartRedux';
import Custom_Card from '../../Components/Custom_Card/Custom_Card';
import Primary_Button from '../../Components/Primary_Button/Primary_Button';
import Float from '../../Components/Float/Float';

const Sticker = () => {
  const dispatch = useDispatch();

  const [ sizeData, setSizeData ] = useState([]);

  const [ size, setSize ] = useState({
    height: '',
    width: ''
  });

  const [ values, setValues ] = useState({
    sticker: '',
    type: '',
    img: ['https://images.pexels.com/photos/13761592/pexels-photo-13761592.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'],
    size: '',
    quantity: '',
    material: '',
    art: '',
    startPrice: 0.24,
    custom: true,
    _id: Math.random() * 10000 + 20000
  });
// console.log(values)
  const [ selected, setSelected ] = useState('');

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
    setValues({...values, ['quantity']: ''})
  }, [values.sticker]);

  // Reset quantity on size change
  useEffect(() => {
    setValues({ ...values, ['quantity']: '' })
  },[values.size]);

  // Add to cart
  const handleClick = () => {
    if (!values.sticker || !values.size || !values.type || !values.quantity || !values.material) {
      return
    } else {
      dispatch(addProduct({ serial: Math.random() * 10000 + 20000, ...values, price: Number((values.quantity * values.startPrice).toFixed(2)) }))
    }
  }

  // Always load on page top
  Scroller()

  return (
    <div className='main-wrapper sticker default'>
      <Float values={values} quantity={values.quantity} size={size}/>
      <div className="content">
        {/* Select Sticker */}
        <section className='section-step'>
          <div className="section-header">
            <h2 className="header">Select Sticker</h2>
          </div>
          <div className="section-content">
            {
              sSticker.map((s, indx) => (
                <Custom_Card info={s} key={indx} values={values} setValues={setValues} active={selected === s.name} setActive={setSelected}/>
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
                <Custom_Card info={s} key={indx} values={values} setValues={setValues} active={selected === s.name} setActive={setSelected}/>
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
                <Custom_Card info={s} key={indx} values={values} setValues={setValues} active={selected === s.name} setActive={setSelected} size={size} setSize={setSize}/>
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
                <Custom_Card info={s} key={indx} values={values} setValues={setValues} active={selected === s.name} setActive={setSelected}/>
              ))
            }
          </div>
        </section>
      </div>
      <Primary_Button text={"Add to cart"} handleClick={handleClick}/>
    </div>
  )
}

export default Sticker