import React, { useEffect, useState } from "react";
import Products from "../Components/Products";
import { useSelector} from "react-redux";
import ProductsSecPage from "../Components/ProductsSecPage";
import "../Acss/GridView.css";
// import { useDispatch } from "react-redux";
// import { fetchProductData } from "../redux/CartSlice";
// maxPrice,minPrice
const GridView = ({products}) => {
  
  // console.log("productsG",products)
const {filterData } = useSelector((state) => state.cart);
//console.log("filterData",filterData)
const [data,setData]=useState(products)
// console.log("data",data)

useEffect(() => {
  // console.log("filterData",filterData)
if(filterData?.length==0){

  setData(products);
}else{
  setData(filterData);
}
  
}, [filterData,products]); 


return (

<div> 
         {/* <button onClick={filterHandler}>
        filter
        </button> */}

                 <div className="grid-three-column">
                {data?.map((curElem) => (
              <ProductsSecPage key={curElem.id} curElem={curElem} />
              ))}
                 </div>

     </div>
      );
};

export default GridView;



// function filterHandler() {
//   const featureData = data.filter((curElem) => curElem.featured === true);
//   dispatch(filterArray(featureData));
//   setData(filterproducts);
// }



// const dispatch=useDispatch()
// useEffect(() => {
//   dispatch(fetchProductData());
  
// }, []);