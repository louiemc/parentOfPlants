import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignForm from "../SignForm";
import SignInModal from "../../Form/SignIn";
// import "./FormHome.css";

class FormHome extends Component {
  render () {
    return (
      <div>
        <SignInModal />

        <div>
          <h3>New to Plamt Parenthood?</h3>
          <button>
            <a href="/signUp" component={SignForm}>Create an Account</a>
          </button>
          <Router>
            <Switch>
              <Route exact path="/signUp" />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default FormHome;