import './Custom_Card.css';

const Custom_Card = ({ info, setValues, values, active, setActive, setQuantity, size, setSize }) => {
  const handleSelection = () => {
    setValues({...values, [info.selection]: info.name})
    setActive(info.name)
  }
  const handleChange = (e) => {
    setSize({...size, [e.target.name]: e.target.value})
  }
  return (
    <div className={active ? 'c-card active' : 'c-card'} onClick={handleSelection}>
        <div className="row row-1">
          <img loading='lazy' src={info.img} alt={info.name} className="c-card-img" />
        </div>
        <div className="row row-2">
            <h2 className="title">{info.name}</h2>
            {/* Custom Size Select */}
            {
              info.selection==='size' && values.sticker==='custom' &&
              <div className="c-size">
                <input type="number" placeholder='H' className='c-size-input' min='2' name='height' onChange={handleChange} />
                <input type="number" placeholder='W' className='c-size-input' min='2' name='width' onChange={handleChange} />
              </div>
            }
            {/* Quantity Select */}
            {
              info.selection==='size' && active &&
              <div className="c-quantity">
                <input type="number" placeholder='quantity' className='c-size-input' min='10' onChange={(e) => setQuantity(e.target.value)} />
              </div>
            }
            {/* {
              info.selection==='size' && values.sticker==='custom' ?
              <div className="custom-size">
                <div className="row row-1">
                  <input type="number" className='custom-input' placeholder='Height' min='1' />
                  <input type="number" className='custom-input' placeholder='Width' min='1' />
                </div>
                <div className="row">
                  <input type="number" className='custom-input' placeholder='Quantity' min='10' />
                </div>
              </div> : null
            } */}
        </div>
    </div>
  )
}

export default Custom_Card