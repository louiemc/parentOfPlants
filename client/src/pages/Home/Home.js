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

  handleClose = e => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <h1 className="siteName">Plant Parenthood</h1>

        <p id="siteDescription">
          The ups and downs of being a plant parent. Maybe you're new to plant
          parenthood? Maybe you're an experienced plant parent? We care about
          your time and learning experience. We experiment with plant care and
          propagation. Plant Parenthood is an app that provides you with plant
          care instructions, tips and tricks, and propagation tips that let you
          grow as a plant parent.
        </p>
      </div>
    );
  }
}
