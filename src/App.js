import Home from "./Components/Home";
import "./Acss/App.css";
import Cart from "./Style/Cart";
import SingleProduct from "./Components/SingleProduct";
import About from "./Style/About";
import { Route,Routes } from "react-router-dom";
// import ProductsView from "./Components/ProductsView";
import ProductList from "./ProductList/ProductList";
import Header from "./Navbar/Header";
import Contact from "./Style/Contact";
import ErrorPage from "./Style/ErrorPage";
import Footer from "./Navbar/Footer";

// import SingleProduct from "./Components/SingleProduct";
// create by me
const App = () => {

  return (

    <div className="AllhW">
   



<div className='headerCss'>
      <Header></Header>
      </div>

<div>


    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={ <About />} />
          {/* <Route path="/products" element={<Products />} /> */}
      <Route path="/productlist" element={< ProductList/>} />
      <Route path="/contact" element={< Contact/>} />
      <Route path="/singleproduct/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>

   
    </div>    

       <div className="footerCss">
    <Footer/>  
    </div>
  
  </div>
  );
};

export default App;
