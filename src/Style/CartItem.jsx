import "../Acss/CartItem.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FormatPrice from "../Components/FormatPrice";
import { deleteItem, removeItem } from "../redux/CartSlice";
import { subTotalMinus,subTotalPlus } from "../redux/CartSlice";
import { subTotalDeleteById } from "../redux/CartSlice";
import { getSubTotal } from "../redux/CartSlice";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const CartItem = ({ forShort }) => {
       const { id, image, company, name, description, price }=forShort
    const {stock,catchAmount,total_price} = useSelector((state) => state.cart);
    console.log("catchAmount", catchAmount)
    // console.log("total_price",total_price)
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(catchAmount);

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
        dispatch(subTotalMinus (price ));
         
// console.log("total_price",total_price+price)
       
        // dispatch(getSubTotal( total_price));
    };

console.log("checkcartitme")

   


    

//     const setIncrease = () => {
//         amount < stock ? setAmount(amount + 1) : setAmount(stock);
//         dispatch(subTotalPlus (price ));
         
// // console.log("total_price",total_price+price)
//         // dispatch(getSubTotal( total_price));

//     };



    const setIncrease = () => {
        if (amount < stock) {
            const newAmount = amount + 1;
            setAmount(newAmount);
            dispatch(subTotalPlus(price)); // Dispatch subTotalPlus action with price
        } else {
            setAmount(stock);
        }
    };
    








    useEffect(()=>{
        dispatch(getSubTotal( price));
 
},[])


 
// console.log("total_price",total_price)
// console.log("total_price",total_price*amount)
    return (
        <div className="outercartline">
            <img className="Cartimg" src={image[0].url} alt={id} />
            <h1 className="Carttitle">{name}</h1>

            <div className="cart-hide">
                <p>
                    <FormatPrice price={price} />
                </p>
            </div>

            <div>
                <button onClick={setDecrease} className="Cartdlt">
                       <FaMinus />
                    </button>
                <div>quantity total: {amount}</div>

                <button onClick={setIncrease}> 
                 <FaPlus />
                 </button>
            </div>

            <div>subtotal</div>

            <div className="cart-hide">
                <p>
                    <FormatPrice price={price * amount}  />
                </p>
            </div>
            <div>
            <button className="remove_icon" 
    onClick={() => {
        dispatch(deleteItem(forShort.id));
        dispatch(subTotalDeleteById(price *amount));
    }}><MdDelete />
</button>

            </div>


        </div>
    );
}

export default CartItem;


