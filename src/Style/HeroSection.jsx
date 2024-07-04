import { NavLink } from "react-router-dom";
import "../Acss/HeroSection.css";
const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (

     
<div className="herosactionpossition">


        <div className="grid-grid-two-columnH">

      <div className="hero-section-dataH">
              <div className="welcomeCssH">Welcome to </div>
            <p className="shineNameH"> {name} </p>
            {/* <h1> Raja Store</h1> */}
            <div className="paraCssH">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br/>Molestias
              atque temporibus veniam doloribus libero
              <br/> ad error omnis voluptates
              animi! Suscipit sapiente.
            </div>
            <NavLink>
              <button>show now</button>
            </NavLink>
            <div className="hero-section-imageH">
            <img 
                src="images/hero.jpg"
                alt="hero-section-photo"
                className="img-styleH"
              />
            </div>
         
      </div>



         

       
            
          
          

        </div>
    
        </div>
  );
};





export default HeroSection;
