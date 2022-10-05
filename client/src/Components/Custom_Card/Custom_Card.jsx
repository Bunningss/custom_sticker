import './Custom_Card.css';

const Custom_Card = ({ card, active, setActive }) => {
  return (
    <div className={active ? 'c-card active' : 'c-card'} onClick={() => setActive(card.name)}>
        <div className="row row-1">
          <img loading='lazy' src={card.img} alt="" className="c-card-img" />
        </div>
        <div className="row row-2">
          {
            card.name && card.img ? <h2 className="title">{card.name}</h2> :
            <input type="number" />
          }
        </div>
    </div>
  )
}

export default Custom_Card