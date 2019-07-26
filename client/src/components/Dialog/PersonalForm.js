import React, { Component } from "react";
// import Autocomplete from "react-google-autocomplete";
// import { LoadScript } from "@react-google-maps/api";

export class PersonalForm extends Component {
  state = {
    userAddress: null
  };

  //Set when google place is selected
  onPlaceSelected = place => {
    this.setState({ userAddress: place.formatted_address });
  };

  continue = e => {
    e.preventDefault();
    this.props.updateAddress(this.state.userAddress);
    this.props.nextStep();
  };

  noThanks = e => {
    e.preventDefault();
    this.props.changeLogStatus();
    this.props.handleClose();
  };

  render() {
    const { values, handleChange, handleClose } = this.props;
    return (
      <div className="dialogForm">
        <div className="personal-form-modal-body">
          <h6>Required Fields*</h6>
          <p>FIRST NAME*</p>
          <input
            className="form-control"
            type="text"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <p>LAST NAME*</p>
          <input
            className="form-control"
            type="text"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <p>ADDRESS*</p>
          {/* <LoadScript
            id="script-loader"
            googleMapsApiKey="AIzaSyCf5XbHpo55ZX7k4IILZKfh5ejJ33mFeFw"
            libraries={["places"]}
          > */}
            {/* <Autocomplete
              style={{ index: 1000 }}
              className="form-control"
              onLoad={this.onLoad}
              onPlaceSelected={this.onPlaceSelected}
              types={["geocode"]}
            />
          </LoadScript> */}
          <div className="btn-margins">
            <button className="btn btn-dark" onClick={this.continue}>
              SIGN UP
            </button>
            <button className="btn btn-light" onClick={this.noThanks}>
              NO, THANKS
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalForm;