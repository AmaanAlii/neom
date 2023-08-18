import React from "react";
import "./HerobannerCard.css";
import img from "../../Assest/dog-food-bag-packages-design-pink-background-3d-rendering 1.png";
function HerobannerCard({ image }) {
  return (
    <img
      src={image ? image : img}
      alt="banner"
      className="herobannercard_img"
    />
  );
}

export default HerobannerCard;
