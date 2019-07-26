import React, { Component } from "react";
// import axios from "axios";
import "./FormContact.css";

class FormContact extends Component {
  render() {
    // const {
    //   values,
    //   handleChange,
    //   message
    // } = this.props;

    return (
      <div>
        <form
          id="contactForm"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="formGroup">
            <label for="name">Name</label>
            <input type="text" className="formControl" id="name" />
          </div>

          <div className="formGroup">
            <label for="inputEmail">Email</label>
            <input type="email" className="formControl" id="email" />
          </div>

          <div className="formGroup">
            <label for="message">Message</label>
            <textarea className="formControl" rows="7" id="message" />
          </div>

          <button type="submit" className="btn">
            Send
          </button>

          <div>
            {window.location.hash === "#success" && (
              <div id="success">
                <p>Your message has been sent!</p>
              </div>
            )}
            {window.location.hash === "#error" && (
              <div id="error">
                <p>An error occured while submitting the form.</p>
              </div>
            )}
          </div>
        </form>

        {/* <p>Name</p>
          <input id="nameInput" onChange={handleChange("name")} defaultValue={values.name} />
          <p>Email</p>
          <input id="emailInput" onChange={handleChange("email")} defaultValue={values.email} />
          <p>Message</p>
          <input id="messageInput" onChange={handleChange("message")} defaultValue={values.message} />
       */}
      </div>
    );
  }
}

export default FormContact;
