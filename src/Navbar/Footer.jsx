import React from "react";

import { NavLink } from "react-router-dom";
import "../Acss/Footer.css";

import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
      
    <div> 
      
      

        
        
        <footer>
  <div className="grid-four-columnF">



<div className="nameSubribe">  
         
                 <div className="footer-aboutF">
              <h3>Shine Ecommerce</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                </div>

            
    
    
            <div className="footer-subscribeF">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" className="inputserch" />

                <input type="submit" value="subscribe" />
              </form>
            </div> 




             
            
              <div className="footer-social--iconsF">
              
              <h3>Follow Us</h3>
              
                {/* <div> */}
                  <FaDiscord className="iconsF" />
                {/* </div> */}
                {/* <div> */}
                  <FaInstagram className="iconsF" />
                {/* </div> */}
                {/* <div> */}
                  <a
                    href="https://www.youtube.com/@kushrajkidshouse8807"
                    target="_blank">
                    <FaYoutube className="iconsF" />
                  </a>
                {/* </div> */}

                <div className="footer-contactF">
             
            </div>

              </div>
{/* <div>
<h3>Call Us</h3>
<h3>+91 12345678978</h3>
</div> */}
            
            </div>

         
           
       
      </div>     
         
         
         
      </footer>
      <hr />

          <div className="dateprivcay">
         
          
              <p>
                @{new Date().getFullYear()} Shine Ecommerce. All Rights Reserved
              </p>
              
        <div>
                <p>PRIVACY POLICY</p>
        <p>TERMS & CONDITIONS</p>
        </div>
            
             </div>
           
         
       

      
   
    </div>
  );
};



export default Footer;
