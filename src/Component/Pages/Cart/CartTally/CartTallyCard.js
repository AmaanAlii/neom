import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./CartTallyCard.css";
import CartPayBtnImg from "../../../Assest/Cart-Checkout-Vector-PNG.png";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../../slice/CartSlice";

function CartTallyCard() {
  const { cart, totalPrice } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  return (
    <div className="Cart-Price-Section">
      <div className="Cart-Price-Dicount">
        <div className="Cart-Discount-Heading">
          <h4>Discount Code</h4>
        </div>
        <div className="Cart-Discount-Input-Section">
          <div className="Cart-Discount-Input">
            <input type="text" placeholder="Add Discount Code" />
          </div>
          <div className="Cart-Discount-Apply-Button">
            <button> Apply </button>
          </div>
        </div>
      </div>
      <div className="Cart-Price-Details-Section">
        <div className="Price-Heading">
          <h4>Price Details</h4>
        </div>
        <div className="Cart-Price-Pricing">
          <div className="Cart-Price-Totals">
            <span> Subtotal</span>
            <h5>₹ {totalPrice}</h5>
          </div>
          <div className="Cart-Price-Totals">
            <span>Discount</span>
            <h5>0</h5>
          </div>
          <div className="Cart-Price-Totals">
            <span>Shipment cost</span>
            <h5>50</h5>
          </div>
        </div>
        <div className="Cart-Price-GrandTotal">
          <h5>Grandtotal</h5>
          <h6>₹ {totalPrice+50}</h6>
        </div>
      </div>
      <div className="Cart-Checkout-Button">
        <Link to="/addressconfirmation">
          <button>
            {" "}
            Continue to Payment <img src={CartPayBtnImg} alt="Pay" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CartTallyCard;
