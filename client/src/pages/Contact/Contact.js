import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/FormContact/FormContact";
import "./Contact.css";

class Contact extends Component {
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

        <section className="contactWelcome">
          <h1>
            We'd love to hear from you!
          </h1>
        </section>

        <div className="mailTo">
          <p>
            <a href={`mailto: profileplantsnyc@gmail.com`}>CONTACT</a>
          </p>
          {/* <Form /> */}

        </div>

        {/* <section className="Subscribe">
          <div className="subscribeDiv">
            <p id="subscribeNote">
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

export default Contact;
