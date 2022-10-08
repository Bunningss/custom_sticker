import './Faqs.css';
import Header_Primary from '../../Components/Header_Primary/Header_Primary';
import Dropdown_Item from '../../Components/Dropdown_Item/Dropdown_Item';
import { faqs, Scroller } from '../../static';

const Faqs = () => {
  const headers = {
    small: 'FAQs',
    large: "Ask us anything"
  }

  // Alwasys load page on top
  Scroller()
  
  return (
    <div className='faqs default main-wrapper'>
      <Header_Primary headers={headers}/>
      <div className="wrapper">
        {
          faqs.map((faq, indx) => (
            <Dropdown_Item faq={faq} key={indx}/>
          ))
        }
      </div>
    </div>
  )
}

export default Faqs