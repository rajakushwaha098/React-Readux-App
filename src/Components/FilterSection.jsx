import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filterbycategory } from "../redux/CartSlice";
import { useState } from "react";
import FormatPrice from "./FormatPrice";
import "../Acss/FilterSection.css";
const FilterSection = () => {
const dispatch=useDispatch()
// category
    const { filters:{ price, maxPrice, minPrice },products,filterData} = useSelector((state) => state.cart);
    // console.log("filterData",filterData)
    const [cate,setCate]=useState(null)
  // console.log(" products", products);

  const getUniqueData = (products, attr) => {
    // console.log("data",data)
    let newVal = products.map((curElem) => {
        // console.log("curElem",curElem)
             return curElem[attr];
    });
  return   newVal=["all", ...new Set(newVal)];
  };
  const categoryData = getUniqueData(products, "category");
//   console.log(categoryData)
  const companyData = getUniqueData(products, "company");

  // for catgory filter

    function updateFilterValueByCategory(curElem){
    
// console.log(curElem)
// if (category !== "all") {
       const tempFilterProduct = products.filter(
          (curE) => curE.category === curElem
         
        );
        dispatch( filterbycategory(tempFilterProduct))
    //   }
    // console.log("tempFilterProduct",tempFilterProduct)
    
    // setCate(curElem)
//    }
}

// for company filter
function updateFilterValueByCompany(e){
        const tempFilterProduct = products.filter(
             (curE) => curE.company === e
           );
           dispatch( filterbycategory(tempFilterProduct))
          console.log("tempFilterProduct",tempFilterProduct) }
    
  

// for range filter
function updateFilterValueByRange(price){
  price = parseFloat(price);
  let tempFilterProduct;
   if(price === 0){
    tempFilterProduct = products.filter(
      (curE) => curE.price == price
    );
  } else {
     tempFilterProduct = products.filter(
      (curE) => curE.price <= price
    );
  }
  console.log("filproducts",tempFilterProduct)
  dispatch( filterbycategory( tempFilterProduct))       
        }
      

// serch filter

const [text, setText] = useState("");
function updateFilterValueBySearch(e){
  let tempFilterProduct
  if (text) {
    tempFilterProduct = products.filter((curE) => {
      return curE.name.toLowerCase().includes(text);
    });
  }
  
  setText(e)
  dispatch( filterbycategory( tempFilterProduct))
       console.log("tempFilterProduct",tempFilterProduct)
          }
        

  return (
    <div>
  <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                // className={curElem === category ? "active" : ""}
            onClick={  ()=>updateFilterValueByCategory(curElem)}
            // onClick={  ()=> setCate(curElem)}
                    >{curElem}
              </button>
            );
          })}
        </div>
      </div>




<div className="filter-search">
        {/* <form onSubmit={(e) => e.preventDefault()}> */}
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={(e)=>updateFilterValueBySearch(e.target.value)}
          />
        {/* </form> */}
      </div>

      <div className="filter-company">
        <h3>Company</h3>

        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            
            onClick={(e)=>updateFilterValueByCompany(e.target.value)}>
            {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>


<div className="filter_price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          min={ minPrice}
          max={ maxPrice}
          // value={price}
          onChange={(e)=>updateFilterValueByRange(e.target.value)}
        />
      </div>

   </div>
  );
};

export default FilterSection;

