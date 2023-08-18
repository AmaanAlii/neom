import React from "react";
import HomeBtnImg from "../../Assest/HomeButton-Vector.svg";
import { Link } from "react-router-dom";
import "./NavigationButtons.css";

function NavigationButtons({ currentPage }) {
  return (
    <div className="Navigation">
      <Link to="/">
        <button className="Navigation-Btn-Home">
          <img src={HomeBtnImg} alt="HomeImg" />
          Home
        </button>
      </Link>
      /<button className="Navigation-Btn-Current">{currentPage}</button>
    </div>
  );
}

export default NavigationButtons;
