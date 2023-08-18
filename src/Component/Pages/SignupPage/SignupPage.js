import React from "react";
import { useForm } from "react-hook-form";
import "./SignupPage.css";
import SignupImage from "../../Assest/Login-Page-Image.png";
import GoogleImage from "../../Assest/Google.svg";
import FbImage from "../../Assest/fb.svg";
import { Link } from "react-router-dom";

import * as colors from "./SignupPageColors";

function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Perform Signup Logic Here
  };

  return (
    <div className="Signup-Page">
      <div className="Signup-Content">
        <div className="Signup-Form-Content">
          <div className="Signup-Heading">
            <h1 style={{ color: colors.headingColor }}>Welcome 😉</h1>
          </div>
          <div className="Signup-Text" style={{ color: colors.textColor }}>
            <span>
              To keep connnected with us please Signup with your personal
              information by <br></br> email address and password
            </span>
          </div>
          <div className="Signup-Form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="Signup-Name">
                <input
                  style={{ color: colors.formTextColor }}
                  type="name"
                  placeholder="Fullname"
                  {...register("name", {
                    required: "Name is required",
                    validate: (value) => {
                      if (value.trim() === "") {
                        return "Full name should not be empty or spaces only";
                      }
                      return true;
                    },
                  })}
                />
                {errors.name && (
                  <span className="Error">{errors.name.message}</span>
                )}
              </div>
              <div className="Signup-Mail">
                <label className="Signup-Mail-Label">Email Address</label>
                <input
                  style={{ color: colors.formTextColor }}
                  type="email"
                  placeholder="dev@domain.com"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
                {errors.email && (
                  <span className="Error">{errors.email.message}</span>
                )}
              </div>
              <div className="Signup-Phone">
                <label className="Signup-Phone-Label">Phone #</label>
                <input
                  style={{ color: colors.formTextColor }}
                  type="phone"
                  placeholder="+20"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^(\+[0-9]{1,3})?[0-9]{6,}$/i,
                      message: "Invalid phone number format",
                    },
                  })}
                />
                {errors.phone && (
                  <span className="Error">{errors.phone.message}</span>
                )}
              </div>
              <div className="Signup-Button-Section">
                <button
                  style={{
                    backgroundColor: colors.buttonColorPrimary,
                    color: colors.buttonTextColor,
                  }}
                  className="Signup-Button"
                  type="submit"
                >
                  Signup →
                </button>
              </div>
              <div className="Signup-BackToLogin">
                <Link to="/signin">
                  <button
                    className="Signup-BackToLogin-Button"
                    style={{
                      backgroundColor: colors.buttonColorSecondary,
                      color: colors.buttonTextColor,
                    }}
                  >
                    Back To Login
                  </button>
                </Link>
              </div>
              <div className="Signup-Join-Options">
                <span style={{ color: colors.formTextColor }}>
                  Or you can join with
                </span>
                <div className="Signup-Join-Icons">
                  <div className="Signup-Google-Icon">
                    <img src={GoogleImage} alt="Google" />
                  </div>
                  <div className="Signup-Facebook-Icon">
                    <img src={FbImage} alt="Facebook" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="Signup-SideImage-Container">
          <img className="Signup-SideImage" src={SignupImage} alt="Artwork" />
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
