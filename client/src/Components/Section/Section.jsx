import Header_Primary from '../Header_Primary/Header_Primary';
import Product from '../Product/Product';
import './Section.css';

const Section = (props) => {
  const { headers } = props;
  return (
    <div className='section'>
        <Header_Primary headers={headers}/>
        <div className="section-content">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
    </div>
  )
}

export default Section