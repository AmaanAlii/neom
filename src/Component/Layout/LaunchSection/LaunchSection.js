import React from "react";
import "./LaunchSection.css";
import img from "../../Assest/rapeseed-oil-canola-rape-flowers-wooden-table 1.png";
function LaunchSection() {
  return (
    <div className="launchsection">
      <p className="launchsection_para1">Launch Faster</p>
      <h3>Build something great</h3>
      <p className="launchsection_para2">
        We’ve done all the heavy lifting so you don’t have to — get all the data
        you need to launch and grow your business faster.
      </p>
      <div className="launchsection_div">
        <div className="launchsection_div_left">
          <span>
            <strong>4,000+</strong>
            <p className="launchsection_div_left_para1">Global customers</p>
            <p className="launchsection_div_left_para2">We’ve helped over 4,000 amazing global companies.</p>
          </span>
          <span>
            <strong>600%</strong>
            <p>Return on investment</p>
            <p>Our customers have reported an average of ~600% ROI.</p>
          </span>{" "}
          <span>
            <strong>10k</strong>
            <p>Global downloads</p>
            <p>Our app has been downloaded over 10k times.</p>
          </span>{" "}
          <span>
            <strong>200+</strong>
            <p>5-star reviews</p>
            <p>We’re proud of our 5-star rating with over 200 reviews.</p>
          </span>
        </div>
        <div className="launchsection_div_right">
          <img src={img} alt="banner" />
        </div>
      </div>
    </div>
  );
}

export default LaunchSection;
