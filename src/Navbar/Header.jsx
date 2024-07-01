import React from "react";
import { NavLink } from "react-router-dom";
import "../Acss/Header.css"; // Assuming this is your CSS file path


import { FiShoppingCart } from "react-icons/fi";
import "../Acss/Navbar.css";

// import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="HeaderSet">

   <div className="store-logo" >
   <NavLink to="/">
        
        <img className="logo-img" src="./images/logo.png" alt="my logo img" />
        {/* <img className="logo-img" src=" https://seeklogo.com/images/S/shine-com-logo-F03D4F3C8B-seeklogo.com.png" alt="my logo img" /> */}
       
         
        
        </NavLink>
   </div>
      
   



 
   <div className="navbar">

<NavLink to="/" className="navbar-link">Home</NavLink>
<NavLink to="/about" className="navbar-link">About</NavLink>
<NavLink to="/productlist" className="navbar-link">Products</NavLink>
<NavLink to="/contact" className="navbar-link">Contact</NavLink>



<NavLink to="/cart">
      <FiShoppingCart
        className="navbar-link"
        style={{
          fill: '#ff0000',        // Red color for the icon fill
          fontWeight: 'bold',     // Bold font weight
          fontSize: '2.5rem',     // Large icon size
          marginRight: '10px'     // Margin to the right for spacing
        }}
      />
    </NavLink>


</div>

  




    </div>
  );
};

export default Header;
