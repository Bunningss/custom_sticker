import './Custom_Card.css';

const Custom_Card = ({ info, setValues, values, active, setActive, size, setSize }) => {
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
                <input type="number" placeholder='H' className='c-size-input' min='2' name='height' required onChange={handleChange} />
                <input type="number" placeholder='W' className='c-size-input' min='2' name='width' required onChange={handleChange} />
              </div>
            }
            {/* Quantity Select */}
            {
              info.selection==='size' && // && active
              <div className="c-quantity">
                <input type="number" placeholder='quantity' name='quantity' className='c-size-input' min='10' onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value} )} />
              </div>
            }
        </div>
    </div>
  )
}

export default Custom_Card