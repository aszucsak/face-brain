import React, { Component } from "react";
import Tilt from "react-tilt";
import brain from "./brain.svg";
import "./Logo.css";

export default class Logo extends Component {
  render() {
    return (
      <div className="ma4 mt0">
        <Tilt
          className="Tilt br2 shadow-2"
          options={{ max: 55 }}
          style={{ height: 150, width: 150 }}
        >
          <div className="Tilt-inner">
            <img src={brain} alt="logo" />
          </div>
        </Tilt>
      </div>
    );
  }
}
