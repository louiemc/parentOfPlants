import React, { Component } from "react";
// import API from "../../../utils/API";
// import "./FormUser.css";

class FormUser extends Component {
  continue = e => {
    e.preventDefault();
    // CREATE AN ACCOUNT
    this.props.createAnAccount();
    this.props.nextStep();
    this.props.logIn();
  };

  handleLogIn = () => {
    console.log("INSIDE handleLogIn function");
    const logInData = {};
    logInData.email = this.state.email;
    logInData.password = this.state.password;
    console.log("this.state.email ", this.state.email);
    console.log("this.state.password ", this.state.password);

    // API.logUser(this.state)
    // .then(res => {
    //   console.log("DEBUG LOG IN USER DATA !!!!!");
    //   console.log("this.state.email ", this.state.email);
    //   console.log("this.state.password ", this.state.password);
    //   if (res) {
    //     this.setState({ loggedin: true });
    //     console.log(this.state.loggedin);
    //   }
    // })
    // .catch(err => console.log(err));
  };

  logInModal = event => {
    const { step } = this.props;
    this.setState({
      step: 5
    });
  };

  render() {
    const {
      values,
      handleChange,
      createAnAccount,
      logIn,
      message,
      loggedin
    } = this.props;
    return (
      <div>
        <div>
          <p>{message}</p>
          <h2>Create an Account</h2>
          <p>E-mail</p>
          <input
            id="emailInput"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <p>Username</p>
          <input
            id="usernameInput"
            onChange={handleChange("username")}
            defaultValue={values.email}
          />
          <p>Password</p>
          <input
            id="passwordInput"
            onChange={handleChange("password")}
            defaultValue={values.password}
          />
          <div>
            <button onClick={this.continue}>Create an Account</button>
            <button>Cancel</button>
          </div>
        </div>

        <div>
          <h2>Already have an account?</h2>
          <p>E-mail</p>
          <input onChange={handleChange("email")} defaultValue={values.email} />
          <p>Password</p>
          <input
            onChange={handleChange("password")}
            defaultValue={values.password}
          />
          <div>
            <button onClick={logIn()}>Log in</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FormUser;