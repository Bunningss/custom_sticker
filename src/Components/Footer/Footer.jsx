import './Footer.css';
import FooterItem from '../FooterItem/FooterItem';
import { footerData } from '../../static';
import payment from '../../assets/payment.webp';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='wrapper'>
          {
              footerData.map((data, indx) => (
                  <FooterItem data={data} key={indx}/>
              ))
          }
      </div>
      <div className="payment">
        <img src={payment} alt="" className="verified-payment" />
      </div>
    </footer>
  )
}

export default Footer