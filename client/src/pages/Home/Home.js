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
        <h1 className="siteName">PLANT PARENTHOOD</h1>

        <p id="siteDescription">
          The ups and downs of being a plant parent. Maybe you're new to plant
          parenthood? Maybe you're an experienced plant parent? We care about
          your time and learning experience. We experiment with plant care and
          propagation. Plant Parenthood is an app that provides you with plant
          care instructions, tips and tricks, and propagation tips that let you
          grow as a plant parent.
        </p>

        <SignInModal
          isSignedIn={this.props.isSignedIn}
          changeLogStatus={this.props.changeLogStatus}
        />

        <div className="open-account-div">
          <h4 className="new-to-plantParenthood">New to Plant Parenthood?</h4>
          <button
            className=" btn btn-dark margin-btn"
            onClick={this.handleClickOpen}
          >
            CREATE AN ACCOUNT
          </button>
        </div>

        <div>
          <button className="btn btn-dark margin-btn guest-btn" onClick={this.props.signAsGuest} to="/plants" >PLANT PARENTHOOD GUEST</button>
        </div>

        {/* MODAL / DIALOG */}
        <Dialog open={this.state.open} onClose={this.handleClose} changeLogStatus={this.props.changeLogStatus} aria-labaelledby="form-dialog-title" className="dialogbox">
          <MainForm isSignedIn={this.props.isSignedIn} changeLogStatus={this.props.changeLogStatus} handleClickOpen={this.handleClickOpen} handleClose={this.handleClose} />
        </Dialog>

        {this.props.guest === true ? (
          <Redirect to={{ pathname: "/plants" }} />

        ) : (
          <p />
        )}
      </div>
    );
  }
}

export default Home;