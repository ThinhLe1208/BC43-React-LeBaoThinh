import React, { Component } from "react";
import "./style.css";
import objectStyle from "./style.module.css";

export default class StyleDemo extends Component {
  render() {
    console.log(objectStyle);

    const bg = "#fff";
    const cl = "#000";

    return (
      <div className="container">
        <p className="color-red">1. not module</p>
        <p className={`${objectStyle["color-primary"]} text-center bg-info`}>2. module</p>
        <p style={{ backgroundColor: bg, color: cl }}>3. var css</p>
      </div>
    );
  }
}
