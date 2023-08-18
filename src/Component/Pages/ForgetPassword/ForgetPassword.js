import React from "react";
import * as colors from "../../Colors";
import "./ForgetPassword.css";

function ForgetPassword() {
  return (
    <div className="Forget-Password-Section">
      <div className="Forget-Password-Heading">
        <h1 style={{ color: colors.headingColor }}>Forgot Password! 😉</h1>
      </div>
      <div className="Forgot-Password-Text" style={{ color: colors.textColor }}>
        <span>
          To keep connnected with us please login with your personal information
          by email address <br></br> and password
        </span>
      </div>
      <div className="Forgot-Password-InputSection">
        <div className="Forgot-Password-Input">
          <label className="Forgot-Password-Label">Email Address</label>
          <input
            style={{ color: colors.formTextColor }}
            type="email"
            placeholder="dev@domain.com"
          />
        </div>
        <div className="Forgot-Password-Button-Section">
          <button
            className="Forgot-Password-Send-Button"
            style={{
              backgroundColor: colors.buttonColorPrimary,
              color: colors.buttonTextColor,
            }}
          >
            Send
          </button>
        </div>
      </div>
      <div className="Forgot-Password-Login-Button-Section">
        <button
          className="Forgot-Password-Login-Button"
          style={{
            backgroundColor: colors.buttonColorSecondary,
            color: colors.buttonTextColor,
          }}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default ForgetPassword;
