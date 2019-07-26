import React, { Component } from "react";
import UserForm from "./UserForm";
import PersonalForm from "./PersonalForm";
import ConfirmationForm from "./ConfimationForm";
import SuccessForm from "./SuccessForm";
// import API from "../../utils/API";

export class MainForm extends Component {
  state = {
    step: 1,
    email: null,
    password: null,
    firstName: " ",
    lastName: " ",
    username: null,
    street: " ",
    city: " ",
    state: " ",
    zipcode: " ",
    loggedin: false,
    message: " ",
    err: false
  };

  //Sign up form goes to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  //sign up form goes to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  updateAddress = async place => {
    console.log("DEBUG UPDATE ADDRESS", place);
    //Split the formatted address into an array and trim extra
    const splitPlace = await place.split(",").map(place => place.trim());

    //Split the state and zip
    const stateAndZip = await splitPlace[2].split(" ");
    console.log(splitPlace);
    //Setting the home address with the formatted address
    console.log("----------------------");
    this.setState(
      {
        street: splitPlace[0],
        city: splitPlace[1],
        state: stateAndZip[0],
        zipcode: stateAndZip[1]
      },
      console.log("DEBUG UPDATED ADDRESS STATE:", this.state)
    );
  };

  //Gets the current input
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
    // console.log(this.state.email)
  };

  //USER LOG IN
  logIn = () => {
    console.log("INSIDE LogIN function");
    const logInData = {};
    logInData.email = this.state.email;
    logInData.password = this.state.password;
    console.log("this.state.email ", this.state.email);
    console.log("this.state.password ", this.state.password);
    // API.logUser(this.state)
    //   .then(res => {
    //     console.log("DEBUG LOG IN USER DATA !!!!!");
    //     console.log("this.state.email ", this.state.email);
    //     console.log("this.state.password ", this.state.password);
    //     if (res) {
    //       this.props.changeLogStatus();
    //     }
    //   })
    //   .catch(err => console.log(err));
  };

  //CREATE USER
  createAnAccount = async e => {
    console.log(this.state.username);
    if (
      this.state.email === null ||
      this.state.username === null ||
      this.state.password === null
    ) {
      await this.setState({ err: true });
    } else {
      await this.setState({ err: false });
      const createUserData = {};
      createUserData.email = this.state.email;
      createUserData.username = this.state.username;
      createUserData.password = this.state.password;
      console.log(createUserData);
      // API.createUser(createUserData)
      //   .then(res => {
      //     console.log("Success: " + res);
      //     // this.logIn();
      //     API.logUser(this.state)
      //       .then(res => {
      //         if (res) {
      //           console.log("RESPONSE!!!!! ", res);
      //         }
      //       })
      //       .catch(err => console.log(err));
      //     // this.props.changeLogStatus();
      //   })
      //   .catch(err => console.log("Error signing up! ", err));
    }
  };

  //UPDATE USER PERSONAL DATA.
  addUserPersonalData = e => {
    const userPersonalData = {
      email: this.state.email,
      username: this.state.username,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      homeAddress: {
        street: this.state.street,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode
      }
    };

    // API.updateUserInfo(userPersonalData)
    //   .then(res => {
    //     // this.logIn()
    //     this.props.changeLogStatus();
    //     console.log("Successfully updated profile information ", res);
    //   })
    //   .catch(err => console.log("Error updating data", err));
  };

  render() {
    const { step, loggedin, message } = this.state;
    const {
      email,
      password,
      firstName,
      lastName,
      username,
      street,
      city,
      state,
      zipcode
    } = this.state;
    const values = {
      email,
      password,
      firstName,
      lastName,
      username,
      street,
      city,
      state,
      zipcode
    };
    switch (step) {
      case 1:
        return (
          <UserForm
            isSignedIn={this.props.isSignedIn}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleClose={this.props.handleClose}
            createAnAccount={this.createAnAccount}
            changeLogStatus={this.props.changeLogStatus}
            values={values}
            err={this.state.err}
          />
        );
      case 2:
        return (
          <PersonalForm
            isSignedIn={this.props.isSignedIn}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleClose={this.props.handleClose}
            changeLogStatus={this.props.changeLogStatus}
            values={values}
            updateAddress={this.updateAddress}
          />
        );
      case 3:
        return (
          <ConfirmationForm
            isSignedIn={this.props.isSignedIn}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleClose={this.props.handleClose}
            addUserPersonalData={this.addUserPersonalData}
            values={values}
          />
        );
      case 4:
        return (
          <SuccessForm
            handleClose={this.props.handleClose}
            changeLogStatus={this.props.changeLogStatus}
          />
        );
      default:
        return <div />;
    }
  }
}

export default MainForm;