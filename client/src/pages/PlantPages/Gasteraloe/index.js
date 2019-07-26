import React, { Component } from "react";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import "../PlantPage.css";

class Gasteraloe extends Component {
  render() {
    return (
      <div>
        <Nav />

        <section className="plantPagePic">
          <img id="individualImage" src="/images/blankPic.jpg" />
          <img id="individualImage" src="/images/blankPic.jpg" />
          <img id="individualImage" src="/images/blankPic.jpg" />
          <img id="individualImage" src="/images/blankPic.jpg" />
        </section>

        <h2 className="plantCareTitle">Plant Care</h2>

        <p className="plantPagePlant">Air Plants - Tillandsia</p>

        <section className="careDescriptions">
          <div className="sunCare">
            <img id="careSymbolPlants" src="/images/symbolsunny.png" alt="sun image" />
            <p id="careDescriptionPlants">
              Full to bright, indirect light <br />
              Rooms with southern or eastern facing windows are great because
              these spaces are brightly lit with sun!
              <br />
              Sun Fact:
              <br />
              The higher the humidity, the more light that is tolerated by the
              air plant. This means that if your air plant is in a spot where it
              receives LOTS of light, you should mist it more often.
              <br />
              If you have a sunny bathroom, the air plant will have a happy home
              because the humidity from the shower will take care of a majority
              of the plant misting!
            </p>
          </div>

          <div className="waterCare">
            <img id="careSymbolPlants" src="/images/symbolwater.png" alt="sun image" />
            <p id="careDescriptionPlants">
              Mist or soak?
              <br />
              What's most important when figuring out which method to do and the
              frequency the watering is:
              <br />
              <strong>
                How much light is the plant getting? What's the temperature
                during this time? Is your environment dry or humid?{" "}
              </strong>
              <br />
              Once all those questions are answered, you can cater to your air
              plants' needs!
              <br />
              Just <strong>purchased</strong> an air plant?
              <br />
              We've found that starting off with a soak a week after purchasing
              air plants for <strong>at most</strong> 30 minutes was a good
              base-line. Becauase when purchasing plants, we need to make sure
              that we don't over-water them. Somethimes we might buy a plant
              that's been recently watered, which is why we only soak them for
              15 to 30 minutes.
              <br />
              During the seasons, we've lost many air plants. Some from drying
              out and some from rot.
              <br />
              The drying out occured during the summer monthes when we did our
              long soaks (1-1.5 hours) once every two weeks, BUT the two week
              period was too long in the hot, dry apartment. Our little baby
              tillandsias became shriveled 🥺
              <br />
              We've also lost some tillandsias to rot! Rot occurs when your
              plant stays wet longer than 3 hours. <strong>Remember</strong> to
              turn it upside down and shake the excess water out of the crevices
              of the air plant, or you could place it updside down on a towel in
              a bright space.
            </p>
          </div>

          <div className="petCare">
            <img id="careSymbolPlants" src="/images/symbolpetfriendly.png" alt="sun image" />
            <p id="careDescriptionPlants">
            Non-toxic to cats and dogs!
            </p>
          </div>

        </section>

        <Footer />
      </div>
    );
  }
}

export default Gasteraloe;
