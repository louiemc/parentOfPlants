import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "./About.css";

class About extends Component {
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

        <section className="aboutWelcome">
          <p className="aboutDescription">Plant killer to plant afficianado</p>
          <p className="aboutDescription">
            We welcome all humans to Profile Plant
          </p>
          <h2 id="aboutTitle">
            Explore our plants, tips and tricks, and so much more!
          </h2>
        </section>

        <section id="photoAbout">
        <img src="/images/aboutPageEcheveria.jpg" className="aboutImages" />
        <img src="/images/aboutPageBabyPlants.png" className="aboutImages" />
        <img src="/images/aboutPageSucculents.jpg" className="aboutImages"/>
        </section>

        <div className="aboutImage">
          <h3 id="imageOneTitle">
            <span>
              Maybe you are interested in <strong>Succulents</strong>?
            </span>
          </h3>
          <p id="imageOneDescription">
            <span>
              We care for succulents! <br />They thrive on benign neglect!{" "}
              <br /> Our growing collection is here to help you!
            </span>
          </p>
        </div>

        <div className="aboutImage">
          <h3 id="imageTwoTitle">
            <span>Growing plants from <strong>SEEDS</strong>?</span>
          </h3>
          <p id="imageTwoDescription">
            <span>Growing plants from seeds can be difficult.<br />We conduct experiments and discuss what worked and what didn't work.<br />Our experiments span from vegetable seeds, fruit seeds, succulent seeds, and cacti seeds.</span>
          </p>
          
        </div>

        <div className="aboutImage">
          <h3 id="imageThreeTitle">
            <span>Cacti and Succulents!</span>
          </h3>
          <p id="imageThreeDescription">
            <span>We love plants that are low maintenance! <br />And we love taking photos of our plants!</span>
          </p>
          <p id="imageThreeDescriptionTwo">
            <span>Succulents may seem easy.<br />However, sometimes unexpected death can occur.<br />We do our best to find the best care tips for you!</span>
          </p>
          <p id="imageThreeDescriptionThree">
            <span>Pots and different mediums can be hard to choose.<br />We like finding great deals on plants and pots, which fit our different styles.<br />We also try to find which soil mixture is best and even testing non-soil mediums.</span>
          </p>
        </div>

        <div className="aboutImage">
          <h3 id="imageFourTitle">
            <span>Or maybe you're also interested in foliage?</span>
          </h3>
          <p id="imageFourDescription">
            <span>We love foliage too!<br />Care is different for each type of foliage.<br /> We push through the trial and error to help you!<br />This is your plant parenthood journey.</span>
          </p>
          <img src="/images/aboutFoliage.png" />
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

export default About;
