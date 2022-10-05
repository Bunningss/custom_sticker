import './Step.css';
import Custom_Card from '../Custom_Card/Custom_Card';
import { useState } from 'react';

const Step = ({ step }) => {
  const [ selected, setSelected ] = useState(null);
  console.log(selected)
  return (
    <div className='step'>
        <div className="step-title">
            <h2 className="header">{step.title}</h2>
        </div>
        <div className="step-content">
          {
            step.card.map((card, indx) => (
              <Custom_Card key={indx} card={card} active={selected === card.name} setActive={setSelected}/>
            ))
          }
        </div>
    </div>
  )
}

export default Step