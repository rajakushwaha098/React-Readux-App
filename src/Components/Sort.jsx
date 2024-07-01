import React from "react";
// import { BsFillGridFill, BsList } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { filterbycategory } from "../redux/CartSlice";

const Sort = () => {
const { filters:{ price, maxPrice, minPrice },products,filterData,sorting,sorting_value} = useSelector((state) => state.cart);
// console.log("products",products)
const dispatch=useDispatch()

const sortingProducts = (a, b) => {
       let tem = document.getElementById("sortid").value

let sortedProducts = [...products];
  
      sortedProducts.sort((a, b) => {
        console.log("sortedProducts",sortedProducts)
        dispatch( filterbycategory(sortedProducts))
        
        if (tem === "lowest") {
          return a.price - b.price;
        } else if (tem === "highest") {
          return b.price - a.price;
        } else if (tem === "a-z") {
            return a.name.localeCompare(b.name);
          }


      else if (tem === "z-a") {
        return b.name.localeCompare(a.name);

      }
       return 0; 
      });

      return sortedProducts;
    
 };

return (
<div>
  {/* 3rd column  */}
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sortid"
            id="sortid"
            className="sort-selection--style"
        
            onChange={() => sortingProducts()}>
            <option value="lowest">Price(lowest)</option>
             <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>

      </div>    
  );
};
export default Sort;


