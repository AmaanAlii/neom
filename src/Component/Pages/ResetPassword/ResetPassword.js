import React, { useState } from "react";
import * as colors from "../../Colors";
import LockVector from "../../Assest/Lock-Vector.svg";
import EyeVector from "../../Assest/Eye-Vector.svg";
import "./ResetPassword.css";

function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="Reset-Password-Section">
      <div className="Reset-Password-Input-Section">
        <div className="Reset-Password-Input">
          <div className="Reset-Password-Input-Lock-Vector">
            <img src={LockVector} alt="Lock Image"></img>
          </div>
          <div className="Reset-Password-Input-Field">
            <label className="Reset-Password-Label">Password</label>
            <input
              style={{ color: colors.formTextColor }}
              type={showPassword ? "text" : "password"}
              placeholder="**********************"
            />
          </div>
          <div className="Reset-Password-Input-Eye-Vector">
            <img
              src={EyeVector}
              alt="Eye Image"
              onClick={() => setShowPassword(!showPassword)}
            ></img>
          </div>
        </div>
        <div className="Reset-Password-Input">
          <div className="Reset-Password-Input-Lock-Vector">
            <img src={LockVector} alt="Lock Image"></img>
          </div>
          <div className="Reset-Password-Input-Field">
            <label className="Reset-Password-Label">Re-Enter Password</label>
            <input
              style={{ color: colors.formTextColor }}
              type={showPassword ? "text" : "password"}
              placeholder="**********************"
            />
          </div>
          <div className="Reset-Password-Input-Eye-Vector">
            <img
              src={EyeVector}
              alt="Eye Image"
              onClick={() => setShowPassword(!showPassword)}
            ></img>
          </div>
        </div>
      </div>
      <div className="Reset-Password-Button">
        <button
          className="Reset-Password-Save-Button"
          style={{
            backgroundColor: colors.buttonColorPrimary,
            color: colors.buttonTextColor,
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default ResetPassword;
