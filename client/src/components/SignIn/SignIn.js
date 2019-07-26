import React, { Component } from "react";
import CancelBtn from "../Button/CancelBtn";
// import API from "../../utils/API";
import { Redirect } from "react-router-dom";
import "./SignIn.css";

class SignInModal extends Component {
  state = {
    email: "",
    password: "",
    err: ""
  };

  componentDidMount() {
    console.log(
      "INSIDE componentDidMount() this.props.isSignedIn ",
      this.props.isSignedIn
    );
  }

  componentDidUpdate() {
    console.log(
      "INSIDE componentDidUpdate() this.props.isSignedIn ",
      this.props.isSignedIn
    );
  }

  handleLogIn = e => {
    e.preventDefault();
    console.log("Email and password\n", this.state.email.length);
    console.log("this.props.isSignedIn ", this.props.isSignedIn);
    console.log("INSIDE LogIN function");
    if (this.state.email) {
      // API.logUser(this.state)
      //   .then(res => {
      //     console.log("DEBUG REsponse ", res);
      //     if (res) {
      //       this.props.changeLogStatus();
      //     }
      //   })
      //   .catch(error => {
      //     console.log(error);
      //     this.setState({ err: "Invalid email address or password" });
      //   });
    } else {
      this.setState({ err: "Please enter a valid user and pass" });
    }
  };
  render() {
    return (
      <div className="sign-in-component">
        <h5>SIGN INTO YOUR ACCOUNT</h5>
        <form>
          <div>
            <div>
              <label className="label">Email:</label>
            </div>

            <input
              type="email"
              placeholder="example@gmail.com"
              className="sign-in-input"
              onChange={event => this.setState({ email: event.target.value })}
            />
          </div>
          <div>
            <div>
              <label className="label">Password: </label>
            </div>
            <input
              type="password"
              className="sign-in-input"
              placeholder="type in your password"
              onChange={event =>
                this.setState({ password: event.target.value })
              }
            />
          </div>
          <p id="error" className="red">
            {this.state.err}
          </p>
          <button
            className="btn sign-in-btn margin-btn"
            onClick={e => this.handleLogIn(e)}
          >
            SIGN IN
          </button>
          {this.props.isSignedIn ? <Redirect to="/map" /> : null}

          <CancelBtn text="CANCEL" />
        </form>
      </div>
    );
  }
}

export default SignInModal;