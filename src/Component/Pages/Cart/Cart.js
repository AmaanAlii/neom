import React, { useEffect, useState } from "react";
import "./Cart.css";
import NavigationButtons from "../../Layout/NavigationButtons/NavigationButtons";
import CartItemsImg from "../../Assest/Cart-Items-Img.png";
import CartCard from "./CartCard/CartCard";
import "../Cart/CartCard/CartCard.css";
import CartTallyCard from "./CartTally/CartTallyCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, totalPrice } = useSelector((state) => state.allCart);
  const renderedItemsCards = cart.map((item, index) => {
    return (
      <div className="Cart-Card-Container" key={index}>
        <CartCard
          itemId={item.id}
          itemName={item.name}
          itemSize={item.size}
          itemPrice={item.price}
          itemImage={item.image}
          itemQuantity={item.quantity}
        />
      </div>
    );
  });

  return (
    <div className="Cart-Section">
      <NavigationButtons currentPage="Cart" />
      {cart?.length === 0 ? (
        <div className="cart_empty">
          <p>Your Cart seem To Be Empty</p>
          <Link to='/'>Home</Link>
          
        </div>
      ) : (
        <div className="Cart-SubSection">
          <div className="Cart-Main-Section">
            <div className="Cart-Products-Section">
              <div className="Cart-Items-Heading">
                <h4>{cart?.length} Items Selected</h4>
              </div>
              <div className="Cart-Items-List">{renderedItemsCards}</div>
            </div>
            <CartTallyCard />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
