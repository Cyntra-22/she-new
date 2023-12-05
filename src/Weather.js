import React from "react";

import "./Weather.css";

export default function Weather() {
  let weather = {
    city: "New York",
    date: "Monday 10:12",
    temperature: "30",
    description: "Cloudy",
    humidity: "30",
    wind: "10",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
  };
  return (
    <div>
      <div className="Weather">
        <form class="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city name..."
                className="form-control"
                autocomplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="overview">
          <h1>{weather.city}</h1>
          <ul>
            <li>Last Updated: {weather.date}</li>
            <li>{weather.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex weather-temperature">
              <img src={weather.imgUrl} alt="" />
              <div>
                <strong>{weather.temperature}</strong>
                <span className="units">
                  <a href="/" lassName="active">
                    °C
                  </a>{" "}
                  |<a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind:{weather.wind} km/h</li>
            </ul>
          </div>
        </div>
        <div className="weather_forecast"></div>
      </div>
      <p>
        <a href="https://github.com/Cyntra-22/she-new">open-source-code</a> By
        Myo Pa Pa Kyaw from SheCodes
      </p>
    </div>
  );
}
