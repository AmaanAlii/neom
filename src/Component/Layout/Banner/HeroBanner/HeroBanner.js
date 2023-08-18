import React from "react";
import "./HeroBanner.css";
import img from "../../../Assest/image 191.png";
import img1 from "../../../Assest/dog-food-bag-packages-design-pink-background-3d-rendering 1.png";
import img2 from "../../../Assest/oxtail-potato-chips-paper-bag-dark-background 2.png";
import img3 from "../../../Assest/18789171_6 1.png";
import HerobannerCard from "../../../Cards/HerobannerCard/HerobannerCard";
import { Search } from "@mui/icons-material";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const items = [
  <HerobannerCard image={img1} />,
  <HerobannerCard image={img2} />,
  <HerobannerCard image={img3} />,
  <HerobannerCard image={img1} />,
  <HerobannerCard image={img2} />,
  <HerobannerCard image={img3} />,
];
const responsive = {
  0: {
    items: 1,
  },
  720: {
    items: 2,
    itemsFit: "contain",
  },
  1024: {
    items: 2,
    itemsFit: "contain",
  }, 1224: {
    items: 3,
    itemsFit: "contain",
  },
};
function HeroBanner() {
  return (
    <div className="herobanner">
      <h1 className="herobanner_heading">
        I'm Just Here For <br />
        <span>The Snacks</span>
      </h1>
      <span>
        <input type="text" placeholder="Seacrh..." />
        <Search />
      </span>
      <div className="herobanner_cards">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          disableDotsControls={true}
          autoPlayInterval={2000}
        />
      </div>
      <img src={img} alt="banner" className="herobanner_bottom" />
    </div>
  );
}

export default HeroBanner;
