import React, { Component } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    isSignedIn: false,
    username: "",
    useremail: "",
    isSwitched: false,
    guest false
  };

  changeLogStatus = () => {
    console.log("In App/Sign in status: " + this.state.isSignedIn);
    var userStatus = this.state.isSignedIn;
    userStatus = !userStatus;
    this.setState({ isSignedIn: userStatus });
    console.log(userStatus);
  };

  logOut = () => {
    this.setState({ isSignedIn: false });
    console.log(this.state.isSignedIn);
  };

  handleSwitch = () => {
    this.setState({ isSwitched: !this.state.isSwitched });
    console.log("switch button status " + this.state.isSwitched);
  };

  componentDidUpdate(prevState) {
    if (this.state.isSignedIn !== prevState.isSignedIn) {
      console.log("state changed to: " + this.state.isSignedIn);
    }
  };

  signAsGuest = () => {
    var userGuest = this.state.guest;
    userGuest = !userGuest;
    this.setState({ guest: userGuest });
    console.log('did the user opt to sign in as a guest? ' + userGuest);
  };

  render() {
    const { isSignedIn, isSwitched, guest } = this.state;
    console.log("<APP /> component: " + isSignedIn);
    return (
      <div className="App">
        
      </div>
    )
  }
}

export default App;
