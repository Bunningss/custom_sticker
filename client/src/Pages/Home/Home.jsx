import './Home.css';
import Banner from '../../Components/Banner/Banner';
import Section from '../../Components/Section/Section';
import Header_Primary from '../../Components/Header_Primary/Header_Primary';
import Card from '../../Components/Card/Card';

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
  return (
    <div className='home default'>
      <Banner/>
      <div className="main-wrapper">
        <Section headers={headers}/>
        <Section headers={headers_2}/>
        <div className="customize">
          <Header_Primary headers={header_3}/>
          <div className="wrapper">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home