import React, { Component } from "react";
import SignInModal from "../../components/SignIn";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { Redirect } from "react-router";
import "./Home.css";

class Home extends Component {
  state = {
    open: false
  };

  handleClickOpen = e => {
    this.setState({ open: true });
  };

  handleClose =e => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        
      </div>
    )
  }



}