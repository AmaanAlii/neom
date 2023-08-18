import React from "react";
import "./ReviewCard.css";
import img from "../../Assest/Neom-logo 1.png";
import img1 from "../../Assest/chapati-tava-roti-indian-roti 2.png";
import img2 from "../../Assest/indian-chapati-fulka-gehu-roti-with-wheat-grains-background-it-s-healthy-fibre-rich-traditional-north-south-indian-food-selective-focus 2.png";
import img3 from "../../Assest/ingredient-bags-full-flour 2.png";
import { Rating } from "@mui/material";
function ReviewCard() {
  return (
    <div className="reviewcard">
      <div className="reviewcard_card_left">
        <div className="reviewcard_card_left_img">
          <img src={img} alt="profile" />
        </div>
        <div className="reviewcard_card_left_review">
          <span>
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />
          </span>
          <span>
            <p style={{ color: "#18181B" }}>
              You made it so simple. My new site is so much faster and easier to
              work with than my old site. I just choose the page, make the
              changes.
            </p>
          </span>
          <span>
            <p style={{fontSize:'14px'}}>Kristin Watson</p>
            <p style={{fontSize:'14px',color:'#71717A'}}>March 14, 2021</p>
          </span>
        </div>
      </div>
      <div className="reviewcard_card_right">
        <img src={img1} alt="product review" />
        <img src={img2} alt="product review" />
        <img src={img3} alt="product review" />
      </div>
    </div>
  );
}

export default ReviewCard;
