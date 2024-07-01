import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";
import "../Acss/Cart.css";
import FormatPrice from "../Components/FormatPrice";
const Cart = () => {
  const {cartData,total_price ,shipping_fee,sub_Total_price }= useSelector((state) => state.cart);

  // console.log("sub_Total_price total_price",sub_Total_price )

console.log("cartonly")
  if (cartData.length === 0) {
    return (
      <div>
        <h3>No Cart in Item </h3>
      </div>
    );
  }

  return (
    <div className="cart-container">

      <div className="cart_heading">
        <p>Item Image</p>
        <p>Company</p>
        <p className="cart-hide">Price</p>
        <p>Quantity</p>
        <p className="cart-hide">Subtotal</p>
        <p>Remove</p>
      </div>
      
      <hr />
      <div className="cart-items">
        {cartData?.map((item) => (
          <CartItem key={item.id}
          //  {...item} 
           forShort={item}/>
        ))}
      </div>
      <hr />
      <div className="cart-buttons">
        <NavLink to="/products" className="cart-button">
          Continue Shopping
        </NavLink>
        {/* <button className="btn btn-clear" onClick={clearCart}>
            clear cart
          </button> */}
      </div>
      <div className="order-total">
        <div className="order-total-subdata">
          <div>
            <p className="parasubTotal">Subtotal:</p>
            
            <p>
              <FormatPrice 
               price={total_price } 
            />  price
            </p>
          
          
          </div>
          <div>
            <p className="paraShiping">Shipping Fee:</p>
           
            <p><FormatPrice
             price={shipping_fee} 
             />
             </p>
          
          </div>
          <hr />
          <div>
            <p className="paraorder">Order Total:</p>
            <p><FormatPrice price={shipping_fee + total_price} /></p>
          </div>
        </div>
      </div>

      <div>
        clear Cart
      </div>
    </div>
  );
};

export default Cart;


