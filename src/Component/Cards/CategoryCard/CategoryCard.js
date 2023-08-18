import React from "react";
import "./CategoryCard.css";
import img from "../../Assest/23587855_rice_packaging3 1.png";
import { useNavigate } from "react-router-dom";
function CategoryCard() {
  const history=useNavigate()
  return (
    <div className="categorycard">
      <div className="categorycard_img" style={{ backgroundColor: "#C5FFDC" }}>
        <img src={img} alt="category img" />
      </div>
      <div className="categorycard_deatils">
        <p>Neam Atta</p>
        <p className="categorycard_deatils_para">
          Neam Atta 20+ Product of neam atta
        </p>
        <ul>
          <li>
            Neam Atta brand flour is the ideal choice for making cakes, pies,
            pastries, and breads.
          </li>
          <li>It has superior quality and perfect texture for baking</li>
        </ul>
        <span>
          <button onClick={()=>history('/product')}>See More Product</button>
        </span>
      </div>
      {/* <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="228"
          height="44"
          viewBox="0 0 228 44"
          fill="none"
        >
          <path
            d="M212.75 1.16L226.92 21.98L210.45 42.63L15.17 42.47L1 21.65L17.47 1L212.75 1.16Z"
            stroke="#F5F5F5"
            stroke-opacity="0.5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M212.75 1.16L226.92 21.98L210.45 42.63L15.17 42.47L1 21.65L17.47 1L212.75 1.16Z"
            fill="black"
            fill-opacity="0.1"
          />
        </svg>
      </button> */}
    </div>
  );
}

export default CategoryCard;
