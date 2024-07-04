import { NavLink } from "react-router-dom";
import "../Acss/ProductsSecPage.css"; 

const  ProductsSecPage = ({ curElem }) => {
  const { id, name, description, image, price } = curElem;

  return (
    <NavLink to={`/singleproduct/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
     
      <div className="product-container2">
       
        <div className="product-title2">
          <p>{name}</p>
        </div>
    
        <div className="product-image2">
          <img
            src={`${image}`}
            alt={name}
            
          />
        </div>
        <div className="product-price2">
          <p>${price}</p>
        </div>
      
      </div>
   

    </NavLink>
  );
};

export default  ProductsSecPage;
