import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modal/Modal";
import PlantItem from "../../components/PlantItem/PlantItem";
import "./Plants.css";
import PlantData from "../../data.json";
// import PlantData from "../../data";
import plants from "../../components/LocalPlants/Plants";

class Plants extends Component {
  state = {
    show: false
  };

  showModal = e => {
    this.setState({
      show: true
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      plants: plants
    };
  }

  render() {
    const { plants } = this.state;

    return (
      <div>
        <Nav />

        <h1 className="plantPageTitle">Plant List</h1>
        {/* <h5 className="plantPageLegend">
          Plant Care Symbols:
          <span>
            <ul className="legendSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolcloudy.png" />
              </li>
              <li>
                <img src="/images/symbolwater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolair.png" />
              </li>
            </ul>
            <ul className="legendSymbols">
              <li>
                <img src="/images/symbolnosun.png" />
              </li>
              <li>
                <img src="/images/symbolnopartlycloudy.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolnopetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </span>
        </h5> */}

        <div className="plantBody">
          {/* <div id="#####" className="plant medium_to_full indirect_bright air_purifying not_air_purifying pet_friendly not_pet_friendly">
              <div className="plant_image"></div>
              <div className="plant_name"></div>
              <div className="plant_care"></div>
            </div> */}

          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
          {/* <Modal show={this.state.show} /> */}
          {/* onClick={e => {
              this.showModal();
            }} */}
            <a href="/Plants/AirPlants">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Air Plants</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolwater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/AlocasiaPoly">
              <img
                src="/images/plantalocasia.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Alocasia Poly</p>
              {/* <p className="scientificName">SN: Alocasia</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolnosun.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolwater.png" />
              </li>
              <li>
                <img src="/images/symbolnopetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/AloeVera">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Aloe vera</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolindirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/AvocadoPlant">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Avocado Plant</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolwater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}

          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/CactusBunnyEars">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Cactus Bunny Ears</p>
              
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Cactus2</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Cactus3</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Cactus4</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Cactus5</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ******************************** END CACTI SECTION ******************************* */}

          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/CalatheaRattlesnake">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Calathea Rattlesnake</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/CoffeePlant">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Coffee Plant</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/CrotonMagnificent">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Croton Magnificent</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/CrotonPetra">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Croton Petra</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/DracaenaMarginata">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Dracaena Marginata</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/FernBirdsNest">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Fern Bird's Nest</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/FernStaghorn">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Fern Staghorn</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/FiddleLeafFig">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Fiddle Leaf Fig</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/Gasteraloe">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Gasteraloe</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/Haworthia">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Haworthia</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Haworthia</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Haworthia</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Haworthia</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/JadePlant">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Jade Plant</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Jade Plant</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Jade Plant</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/Lithops">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Lithops</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/MonsteraDeliciosa">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Monstera Deliciosa</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/MonsteraHopeSelloum">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Monstera Hope Selloum</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/MonsteraMini">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Monstera Mini</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/OxalixTriangularis">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Oxalis triangularis</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/PeperomiaGoldenGate">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Peperomia Golden Gate</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/PeperomiaPilea">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Peperomia Pilea</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/PhilodendronBrasil">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Philodendron Brasil</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/PhilodendronGreen">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Philodendron Green</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/PothosGreen">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Pothos Green</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/PonytailPalm">
              <img
                src="/images/plantponytailpalm.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Ponytail Palm</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/SansevieriaBlackGold">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Sansevieria Black Gold</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/SansevieriaCylindrica">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Sansevieria Cylindrica</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/SansevieriaGoldenHahnii">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Sansevieria Golden Hahnii</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/SansevieriaMikado">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Sansevieria Mikado</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/SansevieriaMoonshine">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Sansevieria Moonshine</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/SansevieriaRobusta">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Sansevieria Robusta</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/SansevieriaSuperba">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Sansevieria Superba</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/SansevieriaSamuraiDwarf">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Sansevieria Samurai Dwarf</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/SansevieriaWhaleFin">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Sansevieria Whale Fin</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/ScheffleraDwarf">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Schefflera Dwarf</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/SpiderPlant">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">Spider Plant</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/StringofPearls">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">String of Pearls</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/StringofTears">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">String of Tears</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
            <a href="/Plants/ZZPlant">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">ZZ Plant</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolnowater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
          {/* ------------------- START OF PLANT DIV --------------------- */}
          <div className="plantDiv">
          {/* <Modal show={this.state.show} /> */}
          {/* onClick={e => {
              this.showModal();
            }} */}
            <a href="/Plants/AirPlants">
              <img
                src="/images/blankPic.jpg"
                alt="blog post image"
                className="plantImage"
              />
              <p className="plantTitle">FILLER</p>
              {/* <p className="scientificName">SN: Beaucarnea recurvata</p> */}
            </a>
            <ul className="careSymbols">
              <li>
                <img src="/images/symbolsunny.png" />
              </li>
              <li>
                <img src="/images/symbolIndirectSun.png" />
              </li>
              <li>
                <img src="/images/symbolwater.png" />
              </li>
              <li>
                <img src="/images/symbolpetfriendly.png" />
              </li>
              <li>
                <img src="/images/symbolnoair.png" />
              </li>
            </ul>
          </div>
          {/* ------------------- END OF PLANT DIV --------------------- */}
        </div>

        {/* <div className="plant">
          {plants.map(plant => {
            <li key={plant.id}>
              <div>
                <p className="title">{plant.name}</p>
                <p className="title">{plant.image}</p>
              </div>
            </li>
          })}
        </div> */}

        {/* {PlantData.map((plantDetail, index) => { */}

        {/* <PlantItem /> */}
        {/* <PlantItem /> */}
        {/* <div>
          {this.state.PlantData.map(plant => (
            <PlantItem
              key={plant.id}
              id={plant.id}
              // handleClick={this.handlePlantClick}
              image={plant.image}
            />
          ))}
          </div> */}

        {/* <h1>{plantDetail.image}</h1>
            <p>{plantDetail.name}</p> */}

        {/* ; }) */}
        {/* <section className="plantBody">
          {this.state.data.map(plant => (
            <ClickPlant key={item.id} id={item.id} image={item.image} />
          ))}
        </section> */}
        <Footer />
      </div>
    );
  }
}

export default Plants;
