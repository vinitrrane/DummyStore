import React, { useEffect, useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
import Product from './Product';
import Axios from 'axios';

const Main = () => {
  const [productData, setProductData] = useState([]);

  const getProducts = () => {
    Axios.get('https://dummyjson.com/products').then((res) => {
      setProductData(res.data.products);
    });
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Container>
        <div className='products'>
          {productData.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Main;
