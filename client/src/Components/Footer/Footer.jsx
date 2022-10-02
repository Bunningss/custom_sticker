import './Footer.css';
import FooterItem from '../FooterItem/FooterItem';
import { footerData } from '../../static';

const Footer = () => {
  return (
    <footer className='footer'>
        {
            footerData.map((data, indx) => (
                <FooterItem data={data} key={indx}/>
            ))
        }
    </footer>
  )
}

export default Footer