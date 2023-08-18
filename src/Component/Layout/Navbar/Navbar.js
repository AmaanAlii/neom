import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Assest/Neom-logo 1.png";
import { ShoppingCartCheckout, Menu, Close } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";
import atta from "../../Assest/ingredient-bags-full-flour (1) 1.png";
import { useSelector } from "react-redux";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const history = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  useEffect(() => {
    handleMenuToggle();
  }, [pathname]);

  let activeStyle = {
    color: "#e94a53",
    fontweight: "700",
  };
  const { cart } = useSelector((state) => state.allCart);
  return (
    <nav className={scrolled ? "nav_scrolled" : ""}>
      <img src={logo} alt="logo" />
      <div className="nav-menu-icon" onClick={handleMenuToggle}>
        <Menu />
      </div>
      <ul className={` nav-menu ${menuOpen ? "menuOpen" : "menuClose"}`}>
        <div className="menu-close-icon" onClick={handleMenuToggle}>
          {" "}
          <Close style={{ fontSize: "48px" }} />
        </div>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/"
        >
          <li>Home</li>
        </NavLink>
        <li className="product_nav">
          Product
          <div className="product_nav_div">
            <div className="product_nav_div_arrow"></div>
            <ul>
              <li onClick={() => history("/product")}>
                <div className="product_nav_div_sub_div">
                  <img src={atta} alt="category" />
                  <span>
                    <p>Neom Atta</p>
                    <p className="product_nav_div_sub_div_para">
                      sub text here !
                    </p>
                  </span>
                </div>
              </li>
              <li onClick={() => history("/product")}>
                <div className="product_nav_div_sub_div">
                  <img src={atta} alt="category" />
                  <span>
                    <p>Neom Atta</p>
                    <p className="product_nav_div_sub_div_para">
                      sub text here !
                    </p>
                  </span>
                </div>
              </li>
              <li onClick={() => history("/product")}>
                <div className="product_nav_div_sub_div">
                  <img src={atta} alt="category" />
                  <span>
                    <p>Neom Atta</p>
                    <p className="product_nav_div_sub_div_para">
                      sub text here !
                    </p>
                  </span>
                </div>
              </li>
              <li onClick={() => history("/product")}>
                <div className="product_nav_div_sub_div">
                  <img src={atta} alt="category" />
                  <span>
                    <p>Neom Atta</p>
                    <p className="product_nav_div_sub_div_para">
                      sub text here !
                    </p>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/aboutus"
        >
          <li>About Us</li>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/gallery"
        >
          <li>Gallery</li>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/contact"
        >
          <li>Contact Us</li>
        </NavLink>
      </ul>
      <div>
        <span className="footer_cart">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/cart"
          >
            <span className="cart_count">
              <ShoppingCartCheckout />

              <p>Cart</p>
              {cart?.length > 0 ? (
                <p className="cart_count_count">{cart?.length}</p>
              ) : (
                ""
              )}
            </span>
          </NavLink>
        </span>
        <span className="nav-signin">
          <NavLink to="/signin">
            <button className="Signin-Button">Sign In</button>
          </NavLink>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
