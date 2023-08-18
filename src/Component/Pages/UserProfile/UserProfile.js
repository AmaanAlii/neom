import React, { useState } from "react";
import "./UserProfile.css";
import {
  ArrowBackIos,
  ContactMail,
  Edit,
  Logout,
  NotificationsNone,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import OrderHistory from "../../Cards/OrderHistory/OrderHistory";
import AddressCard from "../../Cards/AddressCard/AddressCard";
function UserProfile() {
  const history = useNavigate();
  const [edit, setEdit] = useState(true);
  const [order, setOrder] = useState(false);
  const [address, setAddress] = useState(false);
  const changeHandle = (e) => {
    console.log(e.target.textContent);
    if (e.target.textContent === "Edit profile") {
      setEdit(true);
      setOrder(false);
      setAddress(false);
    }
    if (e.target.textContent === "Order’s/History") {
      setEdit(false);
      setOrder(true);
      setAddress(false);
    }
    if (e.target.textContent === "Address") {
      setEdit(false);
      setOrder(false);
      setAddress(true);
    }
  };
  return (
    <div className="userprofile">
      <div className="userprofile_left">
        <div className="userprofile_left_top">
          <span onClick={() => history(-1)}>
            <ArrowBackIos />
            <p>Settings</p>
          </span>
          <span onClick={changeHandle} className={edit?'useractive':''}>
            <Edit />
            <p>Edit profile</p>
          </span>
          <span onClick={changeHandle} className={order?'useractive':''}>
            <NotificationsNone />
            <p>Order’s/History</p>
          </span>
          <span onClick={changeHandle} className={address?'useractive':''}>
            <ContactMail />
            <p>Address</p>
          </span>
        </div>
        <div className="userprofile_left_bottom">
          <span>
            <Logout />
            <p>Logout</p>
          </span>
        </div>
      </div>
      <div className="userprofile_right">
        {edit && (
          <div className="userprofile_right_edit">
            <div className="userprofile_right_edit_heading">
              <h3> Edit Profile</h3>
              <Avatar />
            </div>
            <div className="userprofile_right_edit_details">
              <form>
                <div>
                  <p>Full Name</p>
                  <span>
                    <input type="text" placeholder="Mehrab" />
                  </span>
                </div>
                <div>
                  <p>Email</p>
                  <span>
                    <input
                      type="text"
                      placeholder="Mehrabbozorgi.business@gmail.com"
                    />
                  </span>
                </div>
                <div>
                  <p>Contact Number</p>
                  <span>
                    <input type="text" placeholder="580776655656479" />
                  </span>
                </div>
                <div>
                  <p>Password</p>
                  <span>
                    <input type="text" placeholder="sbdfbnd65sfdvb s" />
                  </span>
                </div>
                <div className="userprofile_right_edit_details_button">
                  <button>Save</button>
                </div>
              </form>
            </div>
          </div>
        )}
        {order && (
          <div className="userprofile_right_order">
            <div className="userprofile_right_order_heading">
              <h3>Order’s/ History</h3>
            </div>
            <div className="userprofile_right_order_card">
              <OrderHistory />
              <OrderHistory />
              <OrderHistory />
              <OrderHistory />
            </div>
          </div>
        )}
        {address && (
          <div className="userprofile_right_address">
            <div className="userprofile_right_address_heading">
              <h3>Address</h3>
            </div>
            <div className="userprofile_right_address_card">
              <AddressCard/>
              <AddressCard/>
              <AddressCard/>
              <AddressCard/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
