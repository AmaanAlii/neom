import React, { useState } from "react";
import "./Quantity.css";
import { Add, Remove } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "../../../slice/CartSlice";
function Quantity({ quantity, setQuantity,itemId }) {
  const dispatch=useDispatch()
  const quantityIncreaseHandle = () => {
    setQuantity(quantity + 1);
    dispatch(increaseItemQuantity(itemId))
  };
  const quantityDescreseHandle = () => {
    quantity === 1 ? setQuantity(quantity) : setQuantity(quantity - 1);
    dispatch(decreaseItemQuantity(itemId))
  };
  return (
    <div className="qunatity">
      <span onClick={quantityDescreseHandle} className="qunatity_decrease">
        <Remove />
      </span>
      <span className="qunatity_counter">{quantity}</span>
      <span onClick={quantityIncreaseHandle} className="qunatity_increase">
        <Add />
      </span>
    </div>
  );
}

export default Quantity;
