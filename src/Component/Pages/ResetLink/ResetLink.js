import React from "react";
import * as colors from "../../Colors";
import "./ResetLink.css";

function ResetLink() {
  return (
    <div className="Reset-Link-Section">
      <div className="Reset-Link-Heading">
        <h1 style={{ color: colors.headingColor }}>Forgot Password! 😉</h1>
      </div>
      <div className="Reset-Link-Text">
        <span>
          Password is an important key to protecting your data and information.
          It is essential to have a strong and secure password that is not
          easily<b> NEMESIS@GMAIL.COM </b> Making sure your password is changed
          regularly and never shared with anyone is essential for taking the
          necessary steps to protect your accounts and data.
        </span>
      </div>
    </div>
  );
}

export default ResetLink;
