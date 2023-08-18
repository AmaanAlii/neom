import React, { useState } from "react";
import "./ReviewSection.css";
import { Edit, LinkedCamera } from "@mui/icons-material";
import ReviewCard from "../../Cards/ReviewCard/ReviewCard";
import { Backdrop, Box, Fade, Modal, Rating } from "@mui/material";
import img from "../../Assest/Neom-logo 1.png";
function ReviewSection() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "0px solid transparent",
    boxShadow: 24,
    p: 4,
    outline: "0",
    padding: "0",
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="reviewsection">
      <div className="reviewsection_heading">
        <div className="reviewsection_heading_left">
          <h3>Reviews</h3>
          <span>
            <strong>4.5</strong>
            <p>322+ reviews</p>
          </span>
        </div>
        <div className="reviewsection_heading_right">
          <button onClick={handleOpen}>
            Add Review <Edit style={{ marginLeft: "5px" }} />
          </button>
        </div>
      </div>
      <div className="reviewsection_card">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="addreview">
              <div className="addreview_heading">
                <p>Rate and review</p>
                <p>Give the product review</p>
              </div>
              <div className="addreview_details">
                <div className="addreview_details_left">
                  <img
                    src={img}
                    alt="review"
                    className="addreview_details_left_img"
                  />
                </div>
                <div className="addreview_details_right">
                  <p className="addreview_details_right_name">Nemesis</p>
                  <p className="addreview_details_right_title">
                    Your review will be posted publicly on the web
                  </p>
                  <Rating name="half-rating" defaultValue={0} precision={0.5} />
                  <span className="addreview_details_right_span">
                    <textarea
                      type="text"
                      placeholder="Share details of your own experience at this place ."
                    />
                  </span>
                  <span className="addreview_details_right_span_img">
                    <LinkedCamera className="addreview_details_right_span_img_icon" />
                    <input
                      type="file"
                      className="addreview_details_right_span_img_img"
                    />
                  </span>
                  <span className="addreview_details_right_span_button">
                    <button className="addreview_details_right_span_button_cancel" onClick={handleClose}>Cancel</button>
                    <button className="addreview_details_right_span_button_post" >Post</button>
                  </span>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ReviewSection;
