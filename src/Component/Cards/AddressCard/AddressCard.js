import React, { useState } from "react";
import "./AddressCard.css";
import { Backdrop, Box, Fade, Modal } from "@mui/material";
function AddressCard() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "0px solid #fff",
    boxShadow: 24,
    p: 4,
    outline: "0",
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="addresscard">
      <div className="addresscard_left">
        <input type="radio" />
      </div>
      <div className="addresscard_right">
        <div className="addresscard_right_left">
          <p>Street259 Mt Hermon RdCity/TownScotts</p>
          <p>ValleyState/Province/RegionCaliforniaZip/Postal Code95066Phone</p>
          <p>Number(831) 438-4614CountryUnited</p>
          <p>StatesLatitude370.47113Longitude-1220.3245</p>
        </div>
        <div className="addresscard_right_right">
          <button onClick={handleOpen}>Edit</button>
        </div>
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
            <div className="address_modal">
              <div className="address_modal_heading">
                <h3>Shipping Address</h3>
              </div>
              <div className="address_modal_details">
                <form >
                    <div className="address_modal_details_full_name">
                        <p>Full name *</p>
                        <span>
                            <input type="text" placeholder="Enter your full name" />
                        </span>
                    </div>
                    <div className="address_modal_details_second">
                        <div>
                            <p>Phone number *</p>
                            <span>
                            <input type="text" placeholder="Enter your full Phone number (only Digits)" />
                            </span>
                        </div> 
                        <div>
                            <p>Street name and house number *</p>
                            <span>
                            <input type="text" placeholder="Enter your Street name and house number" />
                            </span>
                        </div>
                    </div>
                     <div className="address_modal_details_second">
                        <div>
                            <p>City*</p>
                            <span>
                            <input type="text" placeholder="City" />
                            </span>
                        </div> 
                        <div>
                            <p>postal code *</p>
                            <span>
                            <input type="text" placeholder="zip code" />
                            </span>
                        </div>
                    </div>
                    <div className="address_modal_button">
                    <button>Update</button>
                    </div>
                  
                </form>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default AddressCard;
