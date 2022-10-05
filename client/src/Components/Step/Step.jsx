import './Step.css';
import Custom_Card from '../Custom_Card/Custom_Card';

const Step = ({ step }) => {
  return (
    <div className='step'>
        <div className="step-title">
            <h2 className="header">{step.title}</h2>
        </div>
        <div className="step-content">
          {
            step.card.map((card, indx) => (
              <Custom_Card key={indx} card={card}/>
            ))
          }
        </div>
    </div>
  )
}

export default Step