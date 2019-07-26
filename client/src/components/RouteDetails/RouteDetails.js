import React, { useState } from "react";
import "./style.css";
import Step from "../../components/Step";

const RouteDetails = props => {
  let duration, distance;
  const [isClicked, setClick] = useState(false);

  const displayInfo = data => {
    const info = data.routes[0].legs[0];
    duration = info.duration.text;
    distance = info.distance.text;

    console.log("INSIDE ROUT DETAILS COMPONENT ", data.routes[0].legs[0].steps);
  };

  return (
    <div>
      {displayInfo(props.data)}

      <h3 className="details-header">Details about your route to </h3>
      <p id="destination">{props.destination}</p>

      <p>
        Total travel time: <span className="bold-text">{duration}</span>
      </p>
      <p>
        Distance: <span className="bold-text">{distance}</span>
      </p>
      <div>
        <button
          className="btn btn-dark margin-btm "
          onClick={() => setClick(!isClicked)}
        >
          <span className="btn-on-map">
            {isClicked ? "SEE LESS" : "SEE MORE"}
          </span>
        </button>
        <div className="steps">
          {isClicked === true
            ? props.data.routes[0].legs[0].steps.map(element => (
                <Step
                  key={element.distance.value}
                  travel_mode={
                    element.travel_mode
                      ? element.travel_mode
                      : element.transit.travel_mode
                  }
                  instructions={element.instructions}
                  duration={element.duration.text}
                  distance={element.distance.text}
                  arrival_stop={
                    element.transit ? element.transit.arrival_stop.name : ""
                  }
                  departure_stop={
                    element.transit ? element.transit.departure_stop.name : ""
                  }
                  num_stops={element.transit ? element.transit.num_stops : ""}
                />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default RouteDetails;