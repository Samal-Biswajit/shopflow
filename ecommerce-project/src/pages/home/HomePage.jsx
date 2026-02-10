import axios from 'axios'
import { useEffect,useState } from 'react';

import { Header } from "../../components/Header";

import { ProductsGrid } from './Productsgrid';

import "./HomePage.css";

export function HomePage({cart}) {

  const [products,setProducts] = useState([]);

 
  useEffect(()=>{
    axios.get('/api/products?expand=estimated')
      .then((response) => {
        setProducts(response.data);
      });            
  },[]);


  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products = {products} />
      </div>
    </>
  );
}
