import React, { Component } from "react";

export default class DemoChangeFontSize extends Component {
  state = {
    fs: 14,
  };
  updateFs = () => {
    this.setState((preState, props) => {
      console.log(props);
      console.log(preState);
      return { fs: preState.fs + 1 };
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Bai tap tang giam font-size</h3>
        <p style={{ fontSize: `${this.state.fs}px` }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus laboriosam, delectus aut, temporibus
          tempore magni culpa molestiae incidunt quibusdam tenetur quos quo eius eveniet.
        </p>

        <button
          className="btn btn-success mx-2"
          onClick={() => {
            this.updateFs();
          }}
        >
          +
        </button>
        <button
          className="btn btn-success mx-2 px-3"
          onClick={() => {
            this.setState({ fs: this.state.fs - 1 });
          }}
        >
          -
        </button>
      </div>
    );
  }
}
