import React, { Component } from "react";
import "./UserBio.css";
import Dialog from "@material-ui/core/Dialog";

class UserBio extends Component {
  state = {
    open: false,
    newUserEmail: null,
    newUserFName: null,
    newUserLName: null
  };

  handleClickOpen = e => {
    this.setState({ open: true });
  };

  handleClose = e => {
    this.setState({ open: false });
  };
  updateEmail = e => {
    e.target.value
      ? this.setState({ newUserEmail: e.target.value })
      : this.setState({ newUserEmail: this.props.userBio.email });
  };
  updateUserFName = e => {
    e.target.value
      ? this.setState({ newUserFName: e.target.value })
      : this.setState({ newUserFName: this.props.userBio.firstName });
  };
  updateUserLName = e => {
    e.target.value
      ? this.setState({ newUserLName: e.target.value })
      : this.setState({ newUserLName: this.props.userBio.lastName });
  };
  saveBioUpdate = e => {
    e.preventDefault();
    const newUserBio = {
      userBio: {
        firstName: this.state.newUserFName,
        lastName: this.state.newUserLName,
        email: this.state.newUserEmail
      }
    };
    this.props.updateUserBio(newUserBio);
    this.handleClose();
    console.log("updated bio");
  };

  render() {
    return (
      <div className="col-lg-4">
        <h6>YOUR INFORMATION</h6>
        <div className="bio-box">
          <p>Welcome, {this.props.userBio.userName}</p>
          <p>
            Name: {this.props.userBio.firstName.toUpperCase()}{" "}
            {this.props.userBio.lastName.toUpperCase()}
          </p>
          <p>E-mail: {this.props.userBio.email}</p>
          <button className="btn btn-dark" onClick={this.handleClickOpen}>
            EDIT
          </button>
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <div className="dialogBio">
            <h6 className="dialog-title">UPDATE YOUR INFORMATION</h6>
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <p className="first-name-label-update">FIRST NAME</p>
                <input
                  className="first-name-input-update"
                  type="text"
                  placeholder={this.props.userBio.firstName}
                  onChange={this.updateUserFName}
                />
              </div>
              <div className="col-lg-5">
                <p className="last-name-label-update">LAST NAME</p>
                <input
                  className="last-name-input-update"
                  type="text"
                  placeholder={this.props.userBio.lastName}
                  onChange={this.updateUserLName}
                />
              </div>
            </div>
            <p className="email-label-update">E-MAIL</p>
            <input
              className="email-input-update"
              type="email"
              placeholder={this.props.userBio.email}
              onChange={this.updateEmail}
            />
            <hr />
            <div className="buttons-container">
              <button className="btn btn-dark" onClick={this.saveBioUpdate}>
                SAVE
              </button>
              <button
                className="bio-update-cancel-btn btn btn-light"
                onClick={this.handleClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default UserBio;