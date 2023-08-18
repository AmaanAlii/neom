import React from "react";
import "./AdsSection.css";
import img from "../../Assest/Group 9.png";
import img1 from "../../Assest/Group 10.png";
import img2 from "../../Assest/Group 11.png";
function AdsSection() {
  return (
    <div className="adssection">
      <div className="adssection_left">
        <div>
          <img src={img} alt="ads banner" />
        </div>
      </div>
      <div className="adssection_right">
        <div>
          <img src={img1} alt="ads banner" />
        </div>
        <div>
          <img src={img2} alt="ads banner" />
        </div>
      </div>
    </div>
  );
}

export default AdsSection;
