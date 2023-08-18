import React, { useEffect, useState } from "react";
import CartDeleteImg from "../../../Assest/Cart-DeleteButton-Vector.svg";
import "./CartCard.css";
import Quantity from "../../../Layout/Quantity/Quantity";
import { useDispatch } from "react-redux";
import { removeItem } from "../../../../slice/CartSlice";

function CartCard({ itemName, itemSize, itemPrice, itemImage, itemQuantity,itemId }) {
  const dispatch=useDispatch()
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    setQuantity(itemQuantity)
    console.log(itemQuantity,'itemQuantity')
  }, []);
  return (
    <div className="Cart-Items-Card">
      <div className="Cart-Items-Img">
        <img src={itemImage} alt="Product Image" />
      </div>
      <div className="Cart-Product-Details">
        <div className="Cart-Product-Name">
          <h5>{itemName}</h5>
        </div>
        <div className="Cart-Product-Size">
          <span>Size: {itemSize}</span>
        </div>
        <div className="Cart-Product-Price">
          <h4>₹ {itemPrice}</h4>
        </div>
      </div>
      <div className="Cart-Product-Extras">
        <div className="Cart-Product-Delete-Button" onClick={()=>dispatch(removeItem(itemId))}>
          <img src={CartDeleteImg} alt="Delete" />
          <p>Remove</p>
        </div>
        <div className="Cart-Product-Quantity">
          <Quantity setQuantity={setQuantity} quantity={quantity} itemId={itemId}/>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
