import React from "react";
import Parser from "html-react-parser";
import "./style.css";
const Step = props => {
  return (
    <div className="card">
      <div className="card-header"> {props.travel_mode}</div>
      <ul className="list-group list-group-item bold-text">
        {props.duration} ({props.distance}){" "}
        {props.num_stops ? props.num_stops + " stops " : ""}
      </ul>

      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          {" "}
          {props.travel_mode === "WALKING" || props.travel_mode === "DRIVING"
            ? Parser(props.instructions)
            : "Take the " +
              props.instructions +
              " from " +
              props.departure_stop +
              " to " +
              props.arrival_stop}
        </li>
      </ul>
    </div>
  );
};

export default Step;