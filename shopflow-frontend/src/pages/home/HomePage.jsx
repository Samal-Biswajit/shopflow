import axios from 'axios'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

import { Header } from "../../components/Header";

import { ProductsGrid } from './Productsgrid';

import "./HomePage.css";

export function HomePage({cart, loadCart}) {

  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const getHomeData = async () => {
      let url = '/api/products?expand=estimated';
      if (search) {
        url += `&search=${encodeURIComponent(search)}`;
      }
      const response = await axios.get(url);
      setProducts(response.data); 
    };     
    getHomeData();
  }, [search]);


  return (
    <>
      <title>Shopflow</title>
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products = {products} loadCart={loadCart} />
      </div>
    </>
  );
}
