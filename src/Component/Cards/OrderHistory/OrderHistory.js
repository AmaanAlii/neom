import React from "react";
import "./OrderHistory.css";
import img from "../../Assest/tasty-healthy-oil-as-source-healthy-fat 1.png";
function OrderHistory() {
  return (
    <div className="orderhistory">
      <div className="orderhistory_img">
        <img src={img} alt="order" />
      </div>
      <div className="orderhistory_details">
        <div className="orderhistory_details_title">
          <span>
            <p>Mustard oil </p>
            <strong>₹ 450.00</strong>
          </span>

          <span>
            <p>order #</p>
            <p>12345669874546646</p>
          </span>
        </div>
        <div className="orderhistory_details_quantityAndreturn">
          <p className="orderhistory_details_quantityAndreturn_para">5kg Size</p>
          <p>Return or replace items : Eligible Thtough July 19, 2023</p>
        </div>
        <div className="orderhistory_details_button">
          <button>Buy It again</button>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
