import React from "react";
import * as colors from "../../Colors";
import "./ResetConfirmation.css";

function ResetConfirmation() {
  return (
    <div className="Reset-Confirmation-Section">
      <div className="Reset-Confirmation-Text-Section">
        <span className="Reset-Confirmation-Text">
          New password has been set - please ensure you keep it safe and
          remember it for future use. Make sure that you don't share your new
          password with anyone and take extra care when it comes to ensuring the
          security of your account.
        </span>
      </div>
      <div className="Reset-Confirmation-BackToLogin">
        <button
          className="Reset-Confirmation-BackToLogin-Button"
          style={{
            backgroundColor: colors.buttonColorSecondary,
            color: colors.buttonTextColor,
          }}
        >
          Back To Login
        </button>
      </div>
    </div>
  );
}

export default ResetConfirmation;
