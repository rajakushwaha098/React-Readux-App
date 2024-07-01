import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
// import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
// import { addToCart } from "../redux/addToCartSlice";
import CartAmountToggle from "./CartAmountToggle";
import { addToCartOther } from "../redux/CartSlice";
import { ForCatchAmout } from "../redux/CartSlice";
import { subTotalPlus } from "../redux/CartSlice";
const AddToCart = ({ product }) => {
const dispatch =useDispatch()
// console.log(product)
// const dataArray = Object.values(product);
  const { id, colors, stock,price } = product;
  // console.log("price",price)

  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

const addToCartHandler = () => {
  dispatch(addToCart(product,stock,id,color,amount));
  dispatch(subTotalPlus( price));
  dispatch(ForCatchAmout(amount))
};


console.log(amount,"amount")
  return (

         <div>
      <div className="colors">
        <p>
          Color:
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}>
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>


      {/* add to cart  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
                 {/* to="/cart"         */}
      <NavLink to="/cart" onClick={addToCartHandler}>
        <button className="btn">Add To Cart</button>
      </NavLink>
   </div>
  );
};
export default AddToCart;
