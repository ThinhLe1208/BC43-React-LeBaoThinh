import React, { Component } from "react";

const TITLE = "Cybersoft";
const renderInfo = (name, age) => {
  return `Xin chao ${name} - ${age} tuoi`;
};

export default class DataBinding extends Component {
  user = {
    userName: "Khai",
    password: 123,
  };

  render() {
    return (
      <div className="p-3">
        <div id="title">{TITLE}</div>
        <p>{renderInfo("Tung", 18)}</p>

        <div className="card w-25">
          <h3 className="card-header text-white text-center bg-dark">User info</h3>
          <div className="card-body">
            <p>UserName</p>
            <input type="text" className="form-control" value={this.user.userName} />
            <p>Password</p>
            <input type="text" className="form-control" value={this.user.password} />
          </div>
        </div>
      </div>
    );
  }
}
