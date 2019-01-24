import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class WeatherCard extends Component {
  // state = { }

  getDayOfWeek = dateString => {
    let date = new Date(dateString);
    console.log(date);
    return this.dayToString(date.getDay());
  };

  dayToString = day => {
    switch (day) {
      case 0:
        return "SUN";
      case 1:
        return "MON";
      case 2:
        return "TUE";
      case 3:
        return "WED";
      case 4:
        return "THU";
      case 5:
        return "FRI";
      case 6:
        return "SAT";
    }
  };

  render() {
    console.log(this.props.weatherInfo);

    return (
      <div>
        <h2 className="display-5">
          {this.getDayOfWeek(this.props.weatherInfo.dateString)}
        </h2>
        <img src={this.props.weatherInfo.weatherImg} />
        <h4>{this.props.weatherInfo.tempC}&deg;C</h4>
        <br />
        <h5>{this.props.weatherInfo.weatherStatus}</h5>
      </div>
    );
  }
}

export default WeatherCard;
