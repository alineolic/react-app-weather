import React from "react";

export default function Temperature() {
  return (
    <div className="row">
      <div className="col-12 col-sm-6">
        <div className="clearfix weather-temperature">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt=""
            className="float-left"
            id="icon"
          />
          <strong id="temperature"></strong>
          <span className="units">
            <a href="#" id="celsius-link" className="active">
              10°C
            </a>{" "}
            |
            <a href="#" id="imperial-link">
              °F
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
