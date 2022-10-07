import './Sticker.css';
import { useState } from 'react';
import Custom_Card from '../../Components/Custom_Card/Custom_Card';
import Float from '../../Components/Float/Float';
import { sSticker, sSize, sType, sMaterial } from '../../static';

const Sticker = () => {
  const [ values, setValues ] = useState({
    sticker: '',
    type: '',
    size: '',
    material: '',
    art: false
  });
  const [ selected, setSelected ] = useState('');
  return (
    <div className='main-wrapper sticker'>
      <Float values={values}/>
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
              sSize.map((s) => (
                <Custom_Card info={s} values={values} setValues={setValues} active={selected === s.name} setActive={setSelected}/>
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