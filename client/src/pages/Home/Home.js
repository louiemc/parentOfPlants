import React, { Component } from "react";
import SignInModal from "../../components/SignIn/SignIn";
// import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
import MainForm from "../../components/Dialog/MainForm";
import { Redirect } from "react-router";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
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
        <Nav />

        <section className="homeSection">
          <div id="summaryDescription">
            <h1 className="siteName">PLANT PARENTHOOD</h1>

            <p id="siteDescription">
              The ups and downs of being a plant parent. Maybe you're new to
              plant parenthood? Maybe you're an experienced plant parent? We
              care about your time and learning experience. We experiment with
              plant care and propagation. Plant Parenthood is an app that
              provides you with plant care instructions, tips and tricks, and
              propagation tips that let you grow as a plant parent.
            </p>
          </div>

          <div id="welcomePicture">
            <img src="#" alt="plant parent with logo" />
          </div>
        </section>

        {/* <section className="welcomeSection">
          <div id="welcomPicture">
            <img src="#" alt="plant parent with" />
          </div>
          <SignInModal
            isSignedIn={this.props.isSignedIn}
            changeLogStatus={this.props.changeLogStatus}
          />

          <div className="open-account-div">
            <h4 className="new-to-plantParenthood">New to Plant Parenthood?</h4>
            <button
              className="btn margin-btn"
              id="newAccountBtn"
              onClick={this.handleClickOpen}
            >
              CREATE AN ACCOUNT
            </button>
          </div>
        </section> */}

        <section className="homeSection">

          <div id="siteExplanation">
            <h3 id="explanationTitle">
              Simple. Straight forward. Informative.
            </h3>
            <p id="explanationDescription">
              With Plant Parenthood, you'll get a variety of plants to browse,
              care tips, and propagation experiments. The good, the bad, the
              beautiful, and the ugly.
            </p>
            <ul id="plantIcons">
              <li>
                <img src="/images/symbolsunny.png" alt="Sunny" />
                <img src="../../images/symbolIndirectSun.png" alt="Sun and Cloud" />
                <p>Light</p>
              </li>
              <li>
                <img src="/images/symbolwater.png" alt="Water Drop" />
                <p>Water</p>
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" alt="Pet Friendly" />
                <p>Pet Friendly</p>
              </li>
              <li>
                <img src="/images/symbolair.png" alt="Air Purifier" />
                <p>Air Purifier</p>
              </li>
            </ul>
          </div>

          <div id="sitePicture">
            <img src="#" alt="plants and icons" />
          </div>
        </section>

        <section className="homeSection">
          <div id="varietyExplanation">
            <h3 id="varietyTitle">Care tips for a variety of plants</h3>
            <p id="varietyDescription">
              There are many different plants, and we're going to try and care
              for them all. Have access to care tips all aquired from first hand
              experience! Trial and error is a core of method of Plant
              Parenthood, and we work through these challenges so other plant
              parents can adapt our tricks to your environements!
            </p>
          </div>

          <div id="varietyPicture">
            <img src="#" alt="plant varieties" />
          </div>
        </section>

        <section className="homeSection">

          <div id="propagationExplanation">
            <h3 id="propagationTitle">Plant Propagation</h3>
            <p className="propagationDescription">
              Plant propagation is the process of growing new plants from a
              variety of sources: seeds, cuttings, and other plant parts.
            </p>
            <p className="propagationDescription">
              We experiment with different propagation methods and we share our
              result with you! The successful attempts and even the unsuccessful
              attempts.
            </p>
          </div>
          <div id="propagationPicture">
            <img src="#" alt="plant propagation" />
          </div>
        </section>

        {/* <section className="signUpReminder">
          <div className="signUpPersuade">
            <p id="signUpNote">
              We get very descriptive here because the more information and the
              more trial-and-error leads to all of us to be better plant
              parents!
            </p>
          </div> */}
          {/* <button
            className="btn margin-btn"
            id="newAccountBtn"
            onClick={this.handleClickOpen}
          >
            CREATE AN ACCOUNT
          </button> */}
        {/* </section> */}

        <Footer />

        {/* <div>
          <button
            className="btn btn-dark margin-btn guest-btn"
            onClick={this.props.signAsGuest}
            to="/plants"
          >
            PLANT PARENTHOOD GUEST
          </button>
        </div> */}

        {/* MODAL / DIALOG */}
        {/* <Dialog open={this.state.open} onClose={this.handleClose} changeLogStatus={this.props.changeLogStatus} aria-labaelledby="form-dialog-title" className="dialogbox">
          <MainForm isSignedIn={this.props.isSignedIn} changeLogStatus={this.props.changeLogStatus} handleClickOpen={this.handleClickOpen} handleClose={this.handleClose} />
        </Dialog> */}

        {/* {this.props.guest === true ? (
          <Redirect to={{ pathname: "/plants" }} />
        ) : (
          <p />
        )} */}
      </div>
    );
  }
}

export default Home;
