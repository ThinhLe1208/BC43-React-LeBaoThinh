import React, { Component } from "react";

export default class DemoChangeColor extends Component {
  state = {
    color: "#fff",
  };

  render() {
    let { color } = this.state;

    return (
      <div className="container">
        <i className="fa fa-home display-1 mb-2" style={{ color: color }}></i>

        <select
          className="mt-2 form-select w-25"
          onInput={(e) => {
            console.log(1);
            this.setState({ color: e.target.value });
          }}
        >
          <option value="#fff">Select color</option>
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
        </select>
      </div>
    );
  }
}
