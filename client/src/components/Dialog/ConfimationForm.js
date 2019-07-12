import React, { Component } from "react";

export class ConfirmationForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.addUserPersonalData();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        email,
        username,
        addUserPersonalData,
        firstName,
        lastName,
        street,
        city,
        state,
        zipcode
      }
    } = this.props;
    return (
      <div className="dialogForm">
        <h5 className="confirmation-title">CONFIRM YOUR INFORMATION</h5>
        <div className="confirmation-modal-body">
          <p className="confirm-data" id="email">
            <span className="bolder-text">E-mail:</span> {email.toLowerCase()}
          </p>
          <p className="confirm-data" id="username">
            <span className="bolder-text">Username:</span>{" "}
            {username.toUpperCase()}
          </p>
          <p className="confirm-data" id="fullName">
            <span className="bolder-text">Name:</span> {firstName.toUpperCase()}{" "}
            {lastName.toUpperCase()}
          </p>
          <p className="confirm-data" id="street">
            <span className="bolder-text">Street Address:</span>{" "}
            {street.toUpperCase()}
          </p>
          <p className="confirm-data" id="city">
            <span className="bolder-text">City:</span> {city.toUpperCase()}
          </p>
          <p className="confirm-data" id="state">
            <span className="bolder-text">State:</span> {state.toUpperCase()}
          </p>
          <p className="confirm-data" id="zipcode">
            <span className="bolder-text">Zip code:</span> {zipcode}
          </p>
          <div className="btn-margins">
            <button
              className="btn btn-dark btn-confirm-info"
              onClick={this.continue}
            >
              CONFIRM
            </button>
            <button className="btn btn-light btn-edit-info" onClick={this.back}>
              EDIT INFORMATION
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmationForm;