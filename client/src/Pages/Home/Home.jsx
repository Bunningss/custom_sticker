import './Home.css';
import Banner from '../../Components/Banner/Banner';
import Section from '../../Components/Section/Section';

const Home = () => {
  const headers = {
    small: "Customize in 5 easy ways",
    large: "custom stickers"
  }
  return (
    <div className='home default'>
      <Banner/>
      <div className="main-wrapper">
        <Section headers={headers}/>
      </div>
    </div>
  )
}

export default Home