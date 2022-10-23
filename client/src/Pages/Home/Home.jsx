import './Home.css';
import { customs, Scroller } from '../../static';
import { useEffect, useState } from 'react';
import { publicReq } from '../../Utilities/requestMethods';
import Banner from '../../Components/Banner/Banner';
import Section from '../../Components/Section/Section';
import HeaderPrimary from '../../Components/HeaderPrimary/HeaderPrimary';
import Card from '../../Components/Card/Card';

const Home = () => {
  const [ products, setProducts ] = useState([]);
  const [ topProducts, setTopProducts ] = useState([]);
  const headers = {
    small: "new products",
    large: "Our new collection"
  }
  const headers_2 = {
    small: "all products",
    large: "browse our collection"
  }
  const header_3 = {
    small: 'Custom',
    large: 'Your Design, your choice'
  }

  // Fetch all products
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicReq.get('/products')
        setProducts(res.data)
      } catch (err) {
        console.log(err.message)
      }
    }
    getProducts();
  }, []);

  // Fetch top Products
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicReq.get('/products?top=top')
        setTopProducts(res.data)
      } catch (err) {
        console.log(err.message)
      }
    }
    getProducts()
  }, [])

  // Always load page on top
  Scroller()
  
  return (
    <div className='home default'>
      <Banner/>
      <div className="main-wrapper">
        <Section headers={headers} prods={topProducts}/>
        <Section headers={headers_2} prods={products}/>
        <div className="customize">
          <HeaderPrimary headers={header_3}/>
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