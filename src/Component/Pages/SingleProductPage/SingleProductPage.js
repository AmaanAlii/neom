import React, { useState } from "react";
import "./SingleProductPage.css";
import { Alert, Rating, Snackbar } from "@mui/material";
import img from "../../Assest/23587855_rice_packaging3 1.png";
import { KeyboardArrowDown, LocalMall } from "@mui/icons-material";
import Quantity from "../../Layout/Quantity/Quantity";
import Footer from "../../Layout/Footer/Footer";
import YouMayAlsoLikeSection from "../../Layout/YouMayAlsoLikeSection/YouMayAlsoLikeSection";
import ReviewSection from "../../Layout/ReviewSection/ReviewSection";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../slice/CartSlice";
import { useNavigate } from "react-router-dom";
function SingleProductPage() {
  const history=useNavigate()
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
  const [highlights, setHighlights] = useState(true);
  const [description, setDescription] = useState(true);
  const [specification, setSpecification] = useState(true);
  const [quantity, setQuantity] = useState(1);
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
  const buyHandle=()=>{
    dispatch(addToCart(productData));
    history('/cart')
  }
  return (
    <div className="singleproductpage">
      <div className="singleproductpage_details">
        <div className="singleproductpage_details_left">
          <div className="singleproductpage_details_left_main">
            <img src={img} alt="product look" />
          </div>
          <div className="singleproductpage_details_left_all_image">
            <span>
              <img src={img} alt="product look" />
            </span>{" "}
            <span>
              <img src={img} alt="product look" />
            </span>{" "}
            <span>
              <img src={img} alt="product look" />
            </span>{" "}
            <span>
              <img src={img} alt="product look" />
            </span>
          </div>
          <div className="singleproductpage_details_left_button">
            <button className="singleproductpage_details_left_button_buynow" onClick={buyHandle}>
              Buy Now
            </button>
            <button
              className="singleproductpage_details_left_button_addtocart"
              onClick={addToCartHandle}
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="singleproductpage_details_right">
          <h3>Neom Atta</h3>
          <div className="singleproductpage_details_right_rating">
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />
            <p>243</p>
            <p>17 Reviews</p>
          </div>
          <div className="singleproductpage_details_right_shortdesc">
            <p>
              Neom Atta is made from whole wheat flour, which is a good source
              of fiber and protein. Fiber helps to keep you feeling full and
              satisfied, while protein helps to build and repair muscle tissue.
            </p>
          </div>
          <div className="singleproductpage_details_right_price">
            <strong>₹ 599</strong>
            <s>₹ 999</s>
          </div>
          <div className="singleproductpage_details_right_quantity">
            <span>
              <p>Quantity</p>
              <LocalMall />
            </span>
            <div className="singleproductpage_details_right_quantity_quantity">
              <span>15Kg</span>
              <span>10Kg</span>
              <span>5Kg</span>
            </div>
          </div>
          <div className="singleproductpage_counter">
            <Quantity setQuantity={setQuantity} quantity={quantity} />
          </div>
          <div className="singleproductpage_details_right_services">
            <span>
              <p>Services</p>
            </span>
            <div>
              <ul>
                <li>Cash on Delivery available</li>
                <li>100% Secured Payment</li>
                <li>Free shipping worldwide</li>
              </ul>
            </div>
          </div>
          <div className="singleproductpage_details_right_highlight">
            <span onClick={() => setHighlights(!highlights)}>
              <p>Highlights</p>
              <KeyboardArrowDown />
            </span>
            {highlights && (
              <div>
                <ul>
                  <li>
                    Neom Atta: whole wheat flour, rich in fiber and protein.
                  </li>
                  <li>
                    Fiber helps you feel full, protein aids in muscle repair.
                  </li>
                  <li>
                    Neom Atta packed with essential vitamins and minerals.
                  </li>
                  <li>
                    Vital nutrients like thiamin, riboflavin, niacin, and iron.
                  </li>
                  <li>Promotes good health and well-being.</li>
                </ul>
              </div>
            )}
          </div>
          <div className="singleproductpage_details_right_description">
            <span onClick={() => setDescription(!description)}>
              <p>Description</p>
              <KeyboardArrowDown />
            </span>
            {description && (
              <div>
                <ul>
                  <li>
                    Neom Atta, a wholesome and nutritious choice, is crafted
                    using the finest whole wheat flour, packed with an array of
                    benefits that contribute to your overall well-being. Being a
                    rich source of fiber and protein, Neom Atta ensures you
                    receive a robust dose of nutrients your body craves. The
                    fiber content aids in promoting a feeling of satiety and
                    contentment, while the protein content aids in the
                    development and mending of vital muscle tissues.
                  </li>
                  <li>
                    Furthermore, Neom Atta goes beyond merely providing fiber
                    and protein; it also boasts a remarkable array of essential
                    vitamins and minerals. Within every serving, you'll find the
                    presence of thiamin, riboflavin, niacin, and iron, all
                    pivotal components needed to support and maintain optimal
                    health. These vital vitamins and minerals play crucial roles
                    in various bodily processes, promoting the proper
                    functioning of your systems, and overall vitality.
                  </li>
                  <li>
                    By incorporating Neom Atta into your diet, you are making a
                    conscious choice towards prioritizing your health and
                    nourishment. With its comprehensive blend of fiber, protein,
                    vitamins, and minerals, Neom Atta takes the lead in ensuring
                    you receive the necessary nutrients to lead a balanced and
                    fulfilling life. Elevate your well-being with Neom Atta,
                    making every meal not just satisfying but also incredibly
                    beneficial.
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="singleproductpage_details_right_specfication">
            <span onClick={() => setSpecification(!specification)}>
              <p>Specifications</p>
              <KeyboardArrowDown />
            </span>
            {specification && (
              <div>
                <ul>
                  <li>
                    Fiber Icon: An icon representing a bundle of wheat stalks or
                    a fiber-rich food item.
                  </li>
                  <li>
                    Protein Icon: An icon representing a protein source, such as
                    a piece of meat or a protein shake.
                  </li>
                  <li>
                    Minerals Icon: An icon representing a mineral-rich source,
                    such as a mineral water bottle or a mineral rock.
                  </li>
                  <li>
                    Vitamins Icon: An icon depicting a vitamin bottle or a group
                    of various vitamins (e.g., B vitamins).
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <ReviewSection />
      <YouMayAlsoLikeSection />
      <Footer />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          SuccessFully Added To Cart!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SingleProductPage;
