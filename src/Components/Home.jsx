import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductData } from '../redux/CartSlice';
 import Featureservice from './Featureservice';
import HeroSection from '../Style/HeroSection';
import Services from '../Style/Services';
import Trusted from '../Style/Trusted';
// import Home import { FiShoppingCart } from "react-icons/fi";
import "../Acss/Home.css";
// Import your fetchProductData action



const Home = () => {
  const featureProducts = useSelector((state) => state.cart.featureProducts);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);
console.log(featureProducts,"checjdata")
  const data = {
    name: "Shine Store",
  };
  
  return (
    <div className="home-container">
      
      <HeroSection myData={data}/>
      
      <div className='FeatureForMQ'>
      <Featureservice posts={featureProducts}/>
      </div>

    <div className='fornon'>
<Services/>
      <Trusted/>
      </div>
    </div>
  );
};

export default Home;

