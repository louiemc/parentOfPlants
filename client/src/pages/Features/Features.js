import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "./Features.css";

class Features extends Component {
  // state = {
  //   open: false
  // };

  // handleClickOpen = e => {
  //   this.setState({ open: true });
  // };

  // handleClose = e => {
  //   this.setState({ open: false });
  // };

  render() {
    return (
      <div>
        <Nav />

        <section className="simpleFeatures">
          <h2 className="sectionTitle">Simple</h2>
          <p>We want plant care to be simple for you!</p>
          <div id="">
            <ul id="">
              <li>
                <img src="/images/" alt="" />
                <img src="../../images" alt="" />
              </li>
              <li>
                <img src="/images/" alt="" />
              </li>
              <li>
                <img src="/images/" alt="" />
              </li>
            </ul>
          </div>
        </section>

        <section className="straightForwardFeatures">
          <h2 className="sectionTitle">Straight Forward</h2>
          <p>We want plant care to be simple for you!</p>
        </section>

        <section className="informativeFeatures">
          <h2 className="sectionTitle">Informative</h2>
          <p>We want plant care to be simple for you!</p>
        </section>

        <section className="tipsTricksFeatures">
          <h2 className="sectionTitle">Tips and Tricks</h2>
          <p>We want plant care to be simple for you!</p>
        </section>

        {/* <section className="fSubscribe">
          <div className="fsubscribeDiv">
            <p id="fsubscribeNote">
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
      </div>
    );
  }
}

export default Features;
