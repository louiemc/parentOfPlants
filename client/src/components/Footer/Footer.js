import React, { Component } from "react";
import About from "../../pages/About/About";
import Features from "../../pages/Features/Features";
import Contact from "../../pages/Contact/Contact";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="linksCopyright">
        <section className="footerInfoLinks">
          <div className="profilePlantCol">
            <h6 className="footerColTitle">PROFILE PLANT</h6>

            <p className="footerColLink">
              <a href="/About">About</a>
            </p>

            <p className="footerColLink">
              <a href="/Features">Features</a>
            </p>
            <p className="footerColLink">
              <a href="/Contact">Contact</a>
            </p>
            </div>

            <div className="profilePlantCol">
            <h6 className="footerColTitle">Our Top Picks</h6>

            <p className="footerColLink">
              <a href="/Plant_Shops">Plant Shops</a>
            </p>

            <p className="footerColLink">
              <a href="/Green_Markets">Green Markets</a>
            </p>
            <p className="footerColLink">
              <a href="/Plant_Decor">Plant Decor</a>
            </p>
            </div>
        </section>

        <section className="ppCopyright">
          2019 © Profile Plant Inc.
          <br />
          <a href={"https://www.instagram.com/profileplant/"} target="blank">
            <img src="/images/instagram.png" alt="instagram icon" />
          </a>
        </section>
      </div>
    );
  }
}

export default Footer;
