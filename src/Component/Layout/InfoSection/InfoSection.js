import React from "react";
import "./InfoSection.css";
import img from "../../Assest/headphones-3 1.png";
import img1 from "../../Assest/chart-bar-33 1.png";
import img2 from "../../Assest/Frame.png";
function InfoSection() {
  return (
    <div className="infosection">
      <div className="infosectionCard">
        <div className="infosectionCard_img">
          <img src={img} alt="icons" />
        </div>
        <div className="infosectionCard_details">
          <p className="infosectionCard_details_heading">Support</p>
          <p className="infosectionCard_details_para">
            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
            proin faucibus nibh et sagittis a. Lacinia purus ac amet.
          </p>
        </div>
      </div>{" "}
      <div className="infosectionCard">
        <div className="infosectionCard_img">
          <img src={img1} alt="icons" />
        </div>
        <div className="infosectionCard_details">
          <p className="infosectionCard_details_heading">Sales</p>
          <p className="infosectionCard_details_para">
            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
            proin faucibus nibh et sagittis a. Lacinia purus ac amet.
          </p>
        </div>
      </div>
      <div className="infosectionCard">
        <div className="infosectionCard_img">
          <img src={img2} alt="icons" />
        </div>
        <div className="infosectionCard_details">
          <p className="infosectionCard_details_heading">Fast Delivery</p>
          <p className="infosectionCard_details_para">
            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
            proin faucibus nibh et sagittis a. Lacinia purus ac amet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
