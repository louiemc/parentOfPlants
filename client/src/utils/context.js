import React, { Component } from "react";
import { plants } from "./data";

class PlantProvider extends Component {
  state = {
    products: [],
    detailPlants: detailPlants,
    modalOpen: false,
    modalPlants: detailPlants
  };

  componentDidMount() {
    this.setPlants();
  }
  setPlants = () => {
    
  }
}