import './Sticker.css';
import { useState } from 'react';
import Custom_Card from '../../Components/Custom_Card/Custom_Card';
import Float from '../../Components/Float/Float';
import { sSticker, circleSize, squareSize, rectangleSize, sType, sMaterial, customSize, Scroller } from '../../static';
import { useEffect } from 'react';

const Sticker = () => {
  const [ sizeData, setSizeData ] = useState([]);

  const [ size, setSize ] = useState({
    height: '',
    width: ''
  });

  const [ quantity, setQuantity ] = useState('');
  const [ values, setValues ] = useState({
    sticker: '',
    type: '',
    size: '',
    material: '',
    art: false
  });

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
    setQuantity('')
    setValues({...values, ['size']: ''})
  }, [values.sticker]);

  // Reset quantity on size change
  useEffect(() => {
    setQuantity('')
  },[values.size]);

  // Always load on page top
  Scroller()

  return (
    <div className='main-wrapper sticker default'>
      <Float values={values} quantity={quantity} size={size}/>
      <div className="content">
        {/* Select Sticker */}
        <section className='section-step'>
          <div className="section-header">
            <h2 className="header">Select Sticker</h2>
          </div>
          <div className="section-content">
            {
              sSticker.map((s) => (
                <Custom_Card info={s} values={values} setValues={setValues} active={selected === s.name} setActive={setSelected}/>
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
              sType.map((s) => (
                <Custom_Card info={s} values={values} setValues={setValues} active={selected === s.name} setActive={setSelected}/>
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
              sizeData.map((s) => (
                <Custom_Card info={s} values={values} setValues={setValues} active={selected === s.name} setActive={setSelected} setQuantity={setQuantity} size={size} setSize={setSize}/>
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
              sMaterial.map((s) => (
                <Custom_Card info={s} values={values} setValues={setValues} active={selected === s.name} setActive={setSelected}/>
              ))
            }
          </div>
        </section>
      </div>
    </div>
  )
}

export default Sticker