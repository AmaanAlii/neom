import React, { useState } from "react";
import "./ProductCard.css";
import img from "../../Assest/8674418_23 1.png";
import { Alert, Rating, Snackbar, Stack } from "@mui/material";
import { ShoppingBag } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../slice/CartSlice";
function ProductCard() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const history = useNavigate();
  const productData = {
    id: 1,
    name: "Neom Atta",
    price: 250,
    quantity: 1,
    image: img,
    size: "5kg",
  };
  const dispatch = useDispatch();
  const addToCartHandle = () => {
    dispatch(addToCart(productData));
    handleClick();
  };
  const buyHandle = () => {
    dispatch(addToCart(productData));
    history("/cart");
  };
  return (
    <div className="productcard">
      <div
        className="productcard_img"
        onClick={() => history("/singleproduct")}
      >
        <img src={img} alt="product img" />
      </div>
      <div className="productcard_details">
        <p onClick={() => history("/singleproduct")}>Snack -- product</p>
        <p
          onClick={() => history("/singleproduct")}
          className="productcard_details_para"
        >
          (100gram)
        </p>
        <span onClick={() => history("/singleproduct")}>
          <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
              className="productcard_details_rating"
            />
          </Stack>
          <p>4.3</p>
        </span>
        <span
          onClick={() => history("/singleproduct")}
          className="productcard_details_price"
        >
          <strong>₹500</strong>
          <s>₹700</s>
        </span>
        <span className="productcard_details_buy">
          <button onClick={buyHandle}>Buy Now</button>
          <p onClick={addToCartHandle}>
            <ShoppingBag className="productcard_details_buy_icon" />
          </p>
        </span>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ProductCard;
