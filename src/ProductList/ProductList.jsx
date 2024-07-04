import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductData } from '../redux/CartSlice'
import { firstLoadArray } from '../redux/CartSlice';
// import ListView from "./ListView";
import GridView from "./GridView";
import FilterSection from '../Components/FilterSection';
import Sort from '../Components/Sort';
import "../Acss/produtlist.css";


const ProductList = () => {
  const {products,filterData} = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // var productsLength = products.length;
console.log("products",products)
// console.log("productsLength",productsLength)
  useEffect(() => {
    dispatch(fetchProductData());
    // dispatch(firstLoadArray());
  }, []);


  return (
    <div>
      <div>
        {/* {filterData.length} */}
      </div>
      <div className='filterCSS'>
      <FilterSection/>
      </div>
   
      {/* <Sort/> */}
      <div className='gridCss'>
      <GridView products={products}/>
      </div>
     
      {/* Home <ListView products={products} /> */}
    
    </div>
  );
};

export default ProductList
