import React, { Component } from "react";
import classnames from "classnames";
import Footer from "../Footer/Footer";
import "./Nav.css";

class Nav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  // ADD EVENT LISTENER WHEN THE COMPONENT IS MOUNT
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // REMOVE EVENT LISTENER WHEN THE COMPONENT IS UNMOUNT
  componentWillMount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // HIDE OR SHOW THE MENU
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScollPos;

    this.setState({
      prevScrollpos: currentScollPos,
      visible
    });
  };

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
      <div className={classnames("navBar", {"navBar--hidden": !this.state.visible})}>
        <div className="logo">
          <a href="/">
            <img src="/images/zlogo.png" alt="logo" />
            {/* <h1>Profile Plant</h1> */}
          </a>
        </div>

        <div className="navLinks">
          <ul>
            <li><a href="/Plants">Plants</a></li>
            <li><a href="/Supplies">Supplies</a></li>
            <li><a href="/Blog">Blog</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
