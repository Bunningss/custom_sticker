import './Home.css';
import Banner from '../../Components/Banner/Banner';
import Section from '../../Components/Section/Section';
import Header_Primary from '../../Components/Header_Primary/Header_Primary';
import Card from '../../Components/Card/Card';
import { bestProducts, customs, products, Scroller } from '../../static';

const Home = () => {
  const headers = {
    small: "top products",
    large: "best selling stickers"
  }
  const headers_2 = {
    small: "all products",
    large: "browse our collection"
  }
  const header_3 = {
    small: 'Custom',
    large: 'Your Design, your choice'
  }

  // Always load page on top
  Scroller()
  
  return (
    <div className='home default'>
      <Banner/>
      <div className="main-wrapper">
        <Section headers={headers} prods={bestProducts}/>
        <Section headers={headers_2} prods={products}/>
        <div className="customize">
          <Header_Primary headers={header_3}/>
          <div className="wrapper">
            {
              customs.map((custom, indx) => (
                <Card custom={custom} key={indx}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home