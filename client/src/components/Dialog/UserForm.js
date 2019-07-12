import React, { Component } from "react";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
//import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
import "./Dialog.css";
import API from "../../utils/API";

class UserForm extends Component {
  continue = async e => {
    e.preventDefault();
    //CREATE AN ACCOUNT

    await this.props.createAnAccount();
    console.log(this.props.err);
    if (!this.props.err) {
      this.props.nextStep();
    }
  };

  handleLogIn = () => {
    console.log("INSIDE handleLogIn function");
    const logInData = {};
    logInData.email = this.state.email;
    logInData.password = this.state.password;
    console.log("this.state.email ", this.state.email);
    console.log("this.state.password ", this.state.password);
    API.logUser(this.state)
      .then(res => {
        console.log("DEBUG LOG IN USER DATA !!!!!");
        console.log("this.state.email ", this.state.email);
        console.log("this.state.password ", this.state.password);
        if (res) {
          this.props.changeLogStatus();
        }
      })
      .catch(err => console.log(err));
  };

  //   logInModal = event => {
  //     const { step } = this.props;
  //     this.setState({
  //       step: 5
  //     });
  //   };

  render() {
    const {
      values,
      handleChange,
      createAnAccount,
      logIn,
      message,
      loggedin,
      handleClose,
      err
    } = this.props;
    return (
      <div className="dialogForm">
        <div className="user-form-modal-body">
          <p>{message}</p>
          <h5 className="title">CREATE AN ACCOUNT</h5>
          {err ? <p>Please fill in the required fields</p> : null}
          <div className="form">
            <p>E-mail</p>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="example@gmail.com"
              onChange={handleChange("email")}
              defaultValue={values.email}
            />
            <p>Username</p>
            <input
              type="text"
              placeholder="create username"
              className="form-control"
              id="usernameInput"
              onChange={handleChange("username")}
              defaultValue={values.username}
            />
            <p>Password</p>
            <input
              className="form-control"
              id="passwordInput"
              type="password"
              placeholder="type in your password"
              onChange={handleChange("password")}
              defaultValue={values.password}
            />
            <p className="red">{this.props.error}</p>
            <div>
              <button
                className="btn btn-dark margin-btn"
                onClick={this.continue}
              >
                CREATE AN ACCOUNT
              </button>
              <button
                className="btn btn-light margin-btn"
                onClick={this.props.handleClose}
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserForm;