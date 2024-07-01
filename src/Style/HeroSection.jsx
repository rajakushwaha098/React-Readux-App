import { NavLink } from "react-router-dom";
import "../Acss/HeroSection.css";
const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (

     

        <div className="grid-grid-two-column">

      <div className="hero-section-data">
              <div className="welcomeCss">Welcome to </div>
            <p className="shineName"> {name} </p>
            {/* <h1> Raja Store</h1> */}
            <div className="paraCss">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br/>Molestias
              atque temporibus veniam doloribus libero
              <br/> ad error omnis voluptates
              animi! Suscipit sapiente.
            </div>
            <NavLink>
              <button>show now</button>
            </NavLink>
            <div className="hero-section-image">
            <img 
                src="images/hero.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
            </div>
         
      </div>



         

       
            
          
          

        </div>
    

  );
};





export default HeroSection;
