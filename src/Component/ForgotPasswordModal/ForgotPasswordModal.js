import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import "./ForgotPasswordModal.css";
import { Link } from "react-router-dom";
import * as colors from "../Colors";

function ForgotPasswordModal({ open, onClose }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSendClick = () => {
    // Logic for api
    setSent(true);
  };

  const handleBackToLogin = () => {
    onClose();
    setSent(false);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="Modal-Container">
        {sent ? (
          <>
            <div className="Modal-SubContainer">
              <span className="Modal-Text">
                Your password reset link has been sent to your email:
              </span>
              <span>{email}</span>
              <Link to="/signin">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleBackToLogin}
                  style={{
                    marginTop: "30px",
                    backgroundColor: colors.buttonColorPrimary,
                    color: colors.buttonTextColor,
                  }}
                >
                  Back To Login
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <h2
              className="Modal-Heading"
              style={{ color: colors.headingColor }}
            >
              Forgot Password?
            </h2>
            <span className="Modal-Text">
              Enter your Email to get a password reset link
            </span>
            <div className="Modal-Field">
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSendClick}
              style={{
                marginTop: "10px",
                backgroundColor: colors.buttonColorPrimary,
                color: colors.buttonTextColor,
              }}
            >
              Send
            </Button>
          </>
        )}
      </div>
    </Modal>
  );
}

export default ForgotPasswordModal;
