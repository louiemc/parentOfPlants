import React, { Component } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
  MDBContainer,
  MDBHamburgerToggler
} from "mdbreact";

class NavBar extends Component {
  state = {
    collapse1: false,
    collapseID: ""
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  };

  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  };

  render() {
    if (this.props.guest === false) {
      return (
        <MDBContainer className="navbar-container">
          <MDBNavbar
            color="amber lighten-4"
            style={{ marginTop: "15px" }}
            light
          >
            <MDBContainer>
              <MDBHamburgerToggler
                color="#333333"
                id="hamburger1"
                onClick={() => this.toggleSingleCollapse("collapse1")}
              />
              <MDBCollapse isOpen={this.state.collapse1} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink className="link" to="/">
                      HOME
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="link" to="/profile">
                      PROFILE
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="link" to="/map">
                      TRIANGULATE
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      className="link"
                      onClick={this.props.logOut}
                      to="/"
                    >
                      LOG OUT
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </MDBContainer>
      );
    }

    if (this.props.guest === true) {
      return (
        <MDBContainer className="navbar-container">
          <MDBNavbar
            color="amber lighten-4"
            style={{ marginTop: "15px" }}
            light
          >
            <MDBContainer>
              <MDBHamburgerToggler
                color="#333333"
                id="hamburger1"
                onClick={() => this.toggleSingleCollapse("collapse1")}
              />
              <MDBCollapse isOpen={this.state.collapse1} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink
                      className="link"
                      onClick={this.props.signAsGuest}
                      to="/"
                    >
                      HOME
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="link" to="/map">
                      Plant Parenthood
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </MDBContainer>
      );
    }
  }
}

export default NavBar;
