import React from 'react';
import {PRODUCTS} from '../../products'
import Product from './Product'
import './Shopping.css'


const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1><i>VR-Mart</i></h1>
      </div>
      <div className='products'>
        {PRODUCTS.map((product)=>(
        // <Product data={product} />
        <Product key={product.id} data={product} />

      ))}</div>
    </div>
  );
};

export default Shop;
