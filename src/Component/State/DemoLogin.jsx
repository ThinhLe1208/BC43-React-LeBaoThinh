import React, { Component } from "react";

export default class DemoLogin extends Component {
  state = {
    result: "default value",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ result: "Dang nhap thanh cong" });
  };

  render() {
    return (
      <div className="container">
        <form className="card w-50 mx-auto mt-3" onSubmit={this.handleSubmit}>
          <div className="card-header bg-dark text-white text-center">Login</div>
          <div className="card-body">
            <p>Username</p>
            <input type="text" className="form-control" id="username" />
            <p>Password</p>
            <input type="text" className="form-control" id="password" />
          </div>
          <div className="card-footer text-center">
            <button className="btn btn-success">Login</button>
          </div>
        </form>
        <div className="alert alert-success w-50 mx-auto mt-3">{this.state.result}</div>
      </div>
    );
  }
}
