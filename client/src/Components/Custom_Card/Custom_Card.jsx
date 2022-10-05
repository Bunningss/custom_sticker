import './Custom_Card.css';

const Custom_Card = ({ card }) => {
  return (
    <div className='c-card'>
        <div className="row row-1">
          <img loading='lazy' src={card.img} alt="" className="c-card-img" />
        </div>
        <div className="row row-2">
          {
            card.name && card.img ? <h2 className="title">{card.name}</h2> :
            <p>custom options here</p>
          }
        </div>
    </div>
  )
}

export default Custom_Card