import React, { Component } from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Features from "./pages/Features/Features";
import Contact from "./pages/Contact/Contact";
import Plants from "./pages/Plants/Plants";
import Supplies from "./pages/Supplies/Supplies";
import Blog from "./pages/Blog/Blog";
import PlantShops from "./pages/PlantShops/PlantShops";
import GreenMarkets from "./pages/GreenMarkets/GreenMarkets";
import PlantDecor from "./pages/PlantDecor/PlantDecor";

import AirPlants from "./pages/PlantPages/AirPlants";
import AlocasiaPoly from "./pages/PlantPages/AlocasiaPoly";
import AloeVera from "./pages/PlantPages/AloeVera";
import AvocadoPlant from "./pages/PlantPages/AvocadoPlant";
import CactusBunnyEars from "./pages/PlantPages/CactusBunnyEars";
import CalatheaRattlesnake from "./pages/PlantPages/CalatheaRattlesnake";
import CoffeePlant from "./pages/PlantPages/CoffeePlant";
import CrotonPetra from "./pages/PlantPages/CrotonPetra";
import CrotonMagnificent from "./pages/PlantPages/CrotonMagnificent";
import DracaenaMarginata from "./pages/PlantPages/DracaenaMarginata";
import FernBirdsNest from "./pages/PlantPages/FernBirdsNest";
import FernStaghorn from "./pages/PlantPages/FernStaghorn";
import FiddleLeafFig from "./pages/PlantPages/FiddleLeafFig";
import Gasteraloe from "./pages/PlantPages/Gasteraloe";
import Haworthia from "./pages/PlantPages/Haworthia";
import JadePlant from "./pages/PlantPages/JadePlant";
import Lithops from "./pages/PlantPages/Lithops";
import MonsteraDeliciosa from "./pages/PlantPages/MonsteraDeliciosa";
import MonsteraHopeSelloum from "./pages/PlantPages/MonsteraHopeSelloum";
import MonsteraMini from "./pages/PlantPages/MonsteraMini";
import OxalisTriangularis from "./pages/PlantPages/OxalisTriangularis";
import PeperomiaGoldenGate from "./pages/PlantPages/PeperomiaGoldenGate";
import PeperomiaPilea from "./pages/PlantPages/PeperomiaPilea";
import PhilodendronBrasil from "./pages/PlantPages/PhilodendronBrasil";
import PhilodendronGreen from "./pages/PlantPages/PhilodendronGreen";
import PonytailPalm from "./pages/PlantPages/PonytailPalm";
import PothosGreen from "./pages/PlantPages/PothosGreen";
import SansevieriaBlackGold from "./pages/PlantPages/SansevieriaBlackGold";
import SansevieriaCylindrica from "./pages/PlantPages/SansevieriaCylindrica";
import SansevieriaGoldenHahnii from "./pages/PlantPages/SansevieriaGoldenHahnii";
import SansevieriaMikado from "./pages/PlantPages/SansevieriaMikado";
import SansevieriaMoonshine from "./pages/PlantPages/SansevieriaMoonshine";
import SansevieriaRobusta from "./pages/PlantPages/SansevieriaRobusta";
import SansevieriaSamuraiDwarf from "./pages/PlantPages/SansevieriaSamuraiDwarf";
import SansevieriaSuperba from "./pages/PlantPages/SansevieriaSuperba";
import SansevieriaWhaleFin from "./pages/PlantPages/SansevieriaWhaleFin";
import ScheffleraDwarf from "./pages/PlantPages/ScheffleraDwarf";
import SpiderPlant from "./pages/PlantPages/SpiderPlant";
import StringofPearls from "./pages/PlantPages/StringofPearls";
import StringofTears from "./pages/PlantPages/StringofTears";
import ZZPlant from "./pages/PlantPages/ZZPlant";

// import Profile from "./pages/Profile/Profile";
// import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  // state = {
  //   isSignedIn: false,
  //   username: "",
  //   useremail: "",
  //   isSwitched: false,
  //   guest: false
  // };


  render() {
    // const { isSignedIn, isSwitched, guest } = this.state;
    // console.log("<APP /> component: " + isSignedIn);
    return (
      <div className="App">
        <Router>
          <div>
            {/* <div className="app-header">
              <div className="phood-logo" />
              <Navbar
                logOut={this.logOut}
                guest={guest}
                signAsGuest={this.signAsGuest}
              />
            </div> */}
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Home />
                )}
              />
              <Route
                exact
                path="/About"
                render={props => (
                  <About />
                )}
              />
              <Route
                exact
                path="/Features"
                render={props => (
                  <Features />
                )}
              />
               <Route
                exact
                path="/Contact"
                render={props => (
                  <Contact />
                )}
              />
               <Route
                exact
                path="/Plants"
                render={props => (
                  <Plants />
                )}
              />
               <Route
                exact
                path="/Supplies"
                render={props => (
                  <Supplies />
                )}
              />
               <Route
                exact
                path="/Blog"
                render={props => (
                  <Blog />
                )}
              /> 
               <Route
                exact
                path="/Plant_Shops"
                render={props => (
                  <PlantShops />
                )}
              /> 
               <Route
                exact
                path="/Green_Markets"
                render={props => (
                  <GreenMarkets />
                )}
              /> 
               <Route
                exact
                path="/Plant_Decor"
                render={props => (
                  <PlantDecor />
                )}
              /> 
               <Route
                exact
                path="/Plants/AirPlants"
                render={props => (
                  <AirPlants />
                )}
              /> 
              <Route
                exact
                path="/Plants/AlocasiaPoly"
                render={props => (
                  <AlocasiaPoly />
                )}
              /> 
              <Route
                exact
                path="/Plants/AloeVera"
                render={props => (
                  <AloeVera />
                )}
              /> 
              <Route
                exact
                path="/Plants/AvocadoPlant"
                render={props => (
                  <AvocadoPlant />
                )}
              /> 
              <Route
                exact
                path="/Plants/CactusBunnyEars"
                render={props => (
                  <CactusBunnyEars />
                )}
              /> 
              <Route
                exact
                path="/Plants/CalatheaRattlesnake"
                render={props => (
                  <CalatheaRattlesnake />
                )}
              /> 
              <Route
                exact
                path="/Plants/CoffeePlant"
                render={props => (
                  <CoffeePlant />
                )}
              /> 
              <Route
                exact
                path="/Plants/CrotonPetra"
                render={props => (
                  <CrotonPetra />
                )}
              /> 
              <Route
                exact
                path="/Plants/"
                render={props => (
                  <CrotonMagnificent />
                )}
              /> 
              <Route
                exact
                path="/Plants/DracaenaMarginata"
                render={props => (
                  <DracaenaMarginata />
                )}
              /> 
              <Route
                exact
                path="/Plants/FernBirdsNest"
                render={props => (
                  <FernBirdsNest />
                )}
              /> 
              <Route
                exact
                path="/Plants/FernStaghorn"
                render={props => (
                  <FernStaghorn />
                )}
              /> 
              <Route
                exact
                path="/Plants/FiddleLeafFig"
                render={props => (
                  <FiddleLeafFig />
                )}
              /> 
              <Route
                exact
                path="/Plants/Gasteraloe"
                render={props => (
                  <Gasteraloe />
                )}
              /> 
              <Route
                exact
                path="/Plants/Haworthia"
                render={props => (
                  <Haworthia />
                )}
              /> 
              <Route
                exact
                path="/Plants/JadePlant"
                render={props => (
                  <JadePlant />
                )}
              /> 
              <Route
                exact
                path="/Plants/Lithops"
                render={props => (
                  <Lithops />
                )}
              /> 
              <Route
                exact
                path="/Plants/MonsteraDeliciosa"
                render={props => (
                  <MonsteraDeliciosa />
                )}
              /> 
              <Route
                exact
                path="/Plants/MonsteraHopeSelloum"
                render={props => (
                  <MonsteraHopeSelloum />
                )}
              /> 
              <Route
                exact
                path="/Plants/MonsteraMini"
                render={props => (
                  <MonsteraMini />
                )}
              /> 
              <Route
                exact
                path="/Plants/OxalisTriangularis"
                render={props => (
                  <OxalisTriangularis />
                )}
              /> 
              <Route
                exact
                path="/Plants/PeperomiaGoldenGate"
                render={props => (
                  <PeperomiaGoldenGate />
                )}
              /> 
              <Route
                exact
                path="/Plants/PeperomiaPilea"
                render={props => (
                  <PeperomiaPilea />
                )}
              /> 
              <Route
                exact
                path="/Plants/PhilodendronBrasil"
                render={props => (
                  <PhilodendronBrasil />
                )}
              /> 
              <Route
                exact
                path="/Plants/PhilodendronGreen"
                render={props => (
                  <PhilodendronGreen />
                )}
              /> 
              <Route
                exact
                path="/Plants/PonytailPalm"
                render={props => (
                  <PonytailPalm />
                )}
              /> 
              <Route
                exact
                path="/Plants/PothosGreen"
                render={props => (
                  <PothosGreen />
                )}
              /> 
              <Route
                exact
                path="/Plants/SansevieriaBlackGold"
                render={props => (
                  <SansevieriaBlackGold />
                )}
              /> 
              <Route
                exact
                path="/Plants/SansevieriaCylindrica"
                render={props => (
                  <SansevieriaCylindrica />
                )}
              /> 
              <Route
                exact
                path="/Plants/SansevieriaGoldenHahnii"
                render={props => (
                  <SansevieriaGoldenHahnii />
                )}
              /> 
              <Route
                exact
                path="/Plants/SansevieriaMikado"
                render={props => (
                  <SansevieriaMikado />
                )}
              /> 
              <Route
                exact
                path="/Plants/SansevieriaMoonshine"
                render={props => (
                  <SansevieriaMoonshine />
                )}
              /> 
              <Route
                exact
                path="/Plants/SansevieriaRobusta"
                render={props => (
                  <SansevieriaRobusta />
                )}
              /> 
              <Route
                exact
                path="/Plants/SansevieriaSamuraiDwarf"
                render={props => (
                  <SansevieriaSamuraiDwarf />
                )}
              /> 
              <Route
                exact
                path="/Plants/SansevieriaSuperba"
                render={props => (
                  <SansevieriaSuperba />
                )}
              /> 
              <Route
                exact
                path="/Plants/SansevieriaWhaleFin"
                render={props => (
                  <SansevieriaWhaleFin />
                )}
              /> 
              <Route
                exact
                path="/Plants/ScheffleraDwarf"
                render={props => (
                  <ScheffleraDwarf />
                )}
              /> 
              <Route
                exact
                path="/Plants/SpiderPlant"
                render={props => (
                  <SpiderPlant />
                )}
              /> 
              <Route
                exact
                path="/Plants/StringofPearls"
                render={props => (
                  <StringofPearls />
                )}
              /> 
              <Route
                exact
                path="/Plants/StringofTears"
                render={props => (
                  <StringofTears />
                )}
              /> 
              <Route
                exact
                path="/Plants/ZZPlant"
                render={props => (
                  <ZZPlant />
                )}
              /> 
              {/* <Route
                exact
                path="/profile"
                render={props => (
                  <Profile
                    {...props}
                    isSignedIn={isSignedIn}
                    changeLogStatus={this.changeLogStatus}
                  />
                )}
              />
              {/* <Route
                exact
                path="/plants"
                render={props => (
                  <Plants
                    {...props}
                    isSignedIn={isSignedIn}
                    changeLogStatus={this.changeLogStatus}
                    handleSwitch={this.handleSwitch}
                    signAsGuest={this.signAsGuest}
                    guest={guest}
                  />
                )}
              /> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
