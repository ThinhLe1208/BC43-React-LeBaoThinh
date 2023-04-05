import React, { Component } from "react";

export default class DemoPageLogin extends Component {
  state = {
    isLogin: false,
  };

  renderLogin = () => {
    if (this.state.isLogin) {
      return (
        <div>
          <button className="btn btn-success me-3">Profile</button>
          <button
            className="btn btn-success"
            onClick={() => {
              this.setState({ isLogin: false });
            }}
          >
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({ isLogin: true });
          }}
        >
          Login
        </button>
      );
    }
  };

  render() {
    return (
      <div className=" text-white ">
        <div className="container d-flex ">
          <div className="w-75">
            <a href="#" className="me-3">
              Home
            </a>
            <a href="#" className="me-3">
              All shoes
            </a>
            <a href="#">Cart</a>
          </div>
          <div className="w-25">{this.renderLogin()}</div>
        </div>
      </div>
    );
  }
}
