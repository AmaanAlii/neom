import React from "react";
import "./AddressConfirmation.css";
import { useForm, useWatch } from "react-hook-form";
import CartTallyCard from "../Cart/CartTally/CartTallyCard";
import NavigationButtons from "../../Layout/NavigationButtons/NavigationButtons";

function AddressConfirmation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const email = useWatch("EmailAddress");

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="Address-Confirmation-Section">
      <NavigationButtons currentPage="cart" />
      <div className="Address-Subsection">
        <div className="Address-Input-Section">
          <div className="Address-Input-Heading">
            <h5>Shipping Address</h5>
          </div>
          <div className="Address-Input-Form">
            <form className="Form-Container" onSubmit={handleSubmit(onSubmit)}>
              <div className="Form-SubContainer">
                <div className="Form-Field">
                  <label>Full Name *</label>
                  <input
                    placeholder="Enter your full name"
                    {...register("FullName", { required: true })}
                  />
                  {errors.FullName && (
                    <span className="Error">Full Name is required</span>
                  )}
                </div>
              </div>
              <div className="Form-SubContainer">
                <div className="Form-Field">
                  <label>Email Address *</label>
                  <input
                    placeholder="Enter your E-mail Address"
                    type="email"
                    {...register("EmailAddress", { required: true })}
                  />
                  {errors.EmailAddress && (
                    <span className="Error">Email Address is required</span>
                  )}
                </div>

                <div className="Form-Field">
                  <label>Confirm Email Address *</label>
                  <input
                    placeholder="Confirm your E-mail"
                    type="email"
                    {...register("ConfirmEmail", {
                      required: true,
                      validate: (value) =>
                        value === email || "Email addresses do not match",
                    })}
                  />
                  {errors.ConfirmEmail && (
                    <span className="Error">
                      Confirm Email Address is required
                    </span>
                  )}
                </div>
              </div>

              <div className="Form-SubContainer">
                <div className="Form-Field">
                  <label>Phone Number *</label>
                  <input
                    placeholder="Enter your phone number (only digits)"
                    {...register("PhoneNumber", { required: true })}
                  />
                  {errors.PhoneNumber && (
                    <span className="Error">Phone Number is required</span>
                  )}
                </div>

                <div className="Form-Field">
                  <label>Street Name and House Number *</label>
                  <input
                    placeholder="Enter your street name and house number"
                    {...register("StreetAddress", { required: true })}
                  />
                  {errors.StreetAddress && (
                    <span className="Error">Street Address is required</span>
                  )}
                </div>
              </div>
              <div className="Form-SubContainer">
                <div className="Form-Field">
                  <label>City *</label>
                  <input
                    placeholder="Enter your city"
                    {...register("City", { required: true })}
                  />
                  {errors.City && (
                    <span className="Error">City is required</span>
                  )}
                </div>

                <div className="Form-Field">
                  <label>Postal Code *</label>
                  <input
                    placeholder="Enter your zip code"
                    {...register("PostalCode", { required: true })}
                  />
                  {errors.PostalCode && (
                    <span className="Error">Postal Code is required</span>
                  )}
                </div>
              </div>

              <button type="submit" className="Submit-Button">
                Save Now
              </button>
            </form>
          </div>
        </div>
        <CartTallyCard />
      </div>
    </div>
  );
}

export default AddressConfirmation;
