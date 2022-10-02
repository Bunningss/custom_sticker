import './Home.css';
import Banner from '../../Components/Banner/Banner';
import Section from '../../Components/Section/Section';

const Home = () => {
  const headers = {
    small: "Customize in 5 easy ways",
    large: "custom stickers"
  }
  const headers_2 = {
    small: "top products",
    large: "best selling stickers"
  }
  return (
    <div className='home default'>
      <Banner/>
      <div className="main-wrapper">
        <Section headers={headers}/>
        <Section headers={headers_2}/>
      </div>
    </div>
  )
}

export default Home