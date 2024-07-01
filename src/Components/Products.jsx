import { NavLink } from "react-router-dom";
import "../Acss/Products.css"; 

const Products = ({ curElem }) => {
  const { id, name, description, image, price } = curElem;

  return (
    <NavLink to={`/singleproduct/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="product-container">
       
        <div className="product-title">
          <p>{name}</p>
        </div>
    
        <div className="product-image">
          <img
            src={`${image}`}
            alt={name}
            
          />
        </div>
        <div className="product-price">
          <p>${price}</p>
        </div>
      
      </div>
    </NavLink>
  );
};

export default Products;
