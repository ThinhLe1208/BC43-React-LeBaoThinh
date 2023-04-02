import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick(e) {
    e.target.className = "btn btn-success";
  }

  render() {
    return (
      <div>
        <p>Handle Event</p>
        <button className="btn btn-danger" onClick={this.handleClick}>
          Click me
        </button>
      </div>
    );
  }
}
