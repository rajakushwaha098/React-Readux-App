import Products from "./Products";
import "../Acss/Featureservice.css";
const Featureservice = ({ posts }) => {
  
  let featureData = [];

  featureData = posts.filter((curElem) => {
    return curElem.featured === true;
  }); 

  return (
    <div className="container-outer">
      
      <div className="container">

        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Feature Services</div>
        
    </div>

      <div className="feature-products">
        { featureData.map((post, index) => {
          return(
            <Products curElem={post} key={post.id} />
          )

        })}
      </div>
    
    
    </div>
  );
};

export default Featureservice;
