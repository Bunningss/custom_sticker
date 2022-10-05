import Step from '../../Components/Step/Step';
import './Sticker.css';
import { stickerSteps } from '../../static';

const Sticker = () => {
  return (
    <div className='main-wrapper'>
      {
        stickerSteps.map((step, indx) => (
          <Step step={step} key={indx}/>
        ))
      }
    </div>
  )
}

export default Sticker