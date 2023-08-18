import React from "react";
import "./ProductPage.css";
import ProductCard from "../../Cards/ProductCard/ProductCard";
import Filter from "../../Layout/Filter/Filter";
import { Link } from "react-router-dom";
import CustomPagination from "../../Layout/CustomPagination/CustomPagination";
import Footer from '../../Layout/Footer/Footer'
function ProductPage() {
  return (
    <>
      <div className="product_breadcrums">
        <div className="product_breadcrums_left">
          <Link to="/">Home</Link> / <p>Product</p>
        </div>
        <div className="product_breadcrums_right">
          <p> Sort By</p>
        </div>
      </div>
      <div className="productpage">
        <div className="productpage_left">
          <Filter />
        </div>
        <div className="productpage_right">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="product_pagination">
        <CustomPagination />
      </div>
      <Footer/>
    </>
  );
}

export default ProductPage;
