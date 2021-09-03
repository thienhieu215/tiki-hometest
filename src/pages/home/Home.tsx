import React, { useState } from 'react';
import Banners from './banners/Banners'
import FlashSale from './flashSale/FlashSale';
import UniqueSale from './uniqueSale/UniqueSale';
import { addToCart } from '../../store/slices/CartSlice'
import { useDispatch } from "react-redux";
import { Product, CartItem } from '../../components/interface';
import { TStore } from "../../store/store";
import { useSelector } from "react-redux";
import SuperSale from './superSale/SuperSale';


const Home = () => {

  const items: Array<CartItem> = useSelector((state: TStore) => state.cartReducer.cartItems);

  console.log(items, 'cart')
  return (
    <div style={{ minHeight: '100vw', backgroundColor: '#FCF4DD', marginBottom: '56px' }}>
      <div style={{ height: '56px' }}></div>
      <Banners />
      <UniqueSale />
      <SuperSale />
      <FlashSale />
    </div>
  )
}

export default Home;
