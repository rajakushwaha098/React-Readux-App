import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageNavigation from "./PageNavigation";
// import MyImage from "./components/MyImage";
import FormatPrice from "./FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import AddToCart from "./AddToCart";
import Star from "./Star";
import "../Acss/SingleProduct.css";
// import AddToCart from "./components/AddToCart";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { getSingleProduct } from "../redux/CartSlice";
import MyImage from "./MyImage";


const SingleProduct = () => {

const API = "https://api.pujakaitem.com/api/products";

const [singleProduct,setSingleProduct]=useState("")


    async function getSingleProduct(url) {
        // setLoading(true);
        try {
          let response = await fetch(url);
          let output = await response.json();
          // Save data into variable
          setSingleProduct(output);
        } 
        catch (error) {
        //   toast.error("Something went wrong");
        }
        // setLoading(false);
      }
      const { id } = useParams();
      useEffect(() => {
     getSingleProduct(`${API}?id=${id}`)
      }, []);
// console.log("singleProduct",singleProduct)


  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;




//   if (isSingleLoading) {
//     return <div className="page_loading">Loading.....</div>;
//   }

  return (
    <div className="container"> 


         {/* <PageNavigation title={name} /> */}
      
        <div className="grid grid-two-column"> 
          <div className="product_images">
            <MyImage imgs={image} />
          </div>  
   <div className="product-data">
                  <h2>{name}</h2>
             <Star stars={stars} reviews={reviews} />
      <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p> 

             <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price} />
            </p> 
             <p>{description}</p> 
            <div className="product-data-warranty">

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div> 


               <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Shine Delivered </p>
              </div> 

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>

            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>


            <hr />
            {stock > 0 && <AddToCart product={singleProduct} /> } 
          </div>

          </div>


        </div>
  );
};

export default SingleProduct;
