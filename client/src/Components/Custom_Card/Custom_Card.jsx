import './Custom_Card.css';

const Custom_Card = ({ info, setValues, values, active, setActive }) => {
  const handleSelection = () => {
    setValues({...values, [info.selection]: info.name})
    setActive(info.name)
  }
  // console.log(active)
  return (
    <div className={active ? 'c-card active' : 'c-card'} onClick={handleSelection}>
        <div className="row row-1">
          <img loading='lazy' src={info.img} alt={info.name} className="c-card-img" />
        </div>
        <div className="row row-2">
            <h2 className="title">{info.name}</h2>
        </div>
    </div>
  )
}

export default Custom_Card