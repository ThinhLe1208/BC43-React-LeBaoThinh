import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    srcCar: "./img/products/red-car.jpg",
  };

  handleChangeColor = (color) => {
    this.setState({
      srcCar: `./img/products/${color}-car.jpg`,
    });
  };

  render() {
    return (
      <div className="container">
        <h3>Bai tap chon xe</h3>
        <div className="row">
          <div className="col-6">
            <img src={this.state.srcCar} alt="img" className="w-100" />
          </div>
          <div className="col-6">
            <button
              className="d-block mb-3 btn btn-dark"
              onClick={() => {
                this.handleChangeColor("black");
              }}
            >
              Black Car
            </button>
            <button
              className="d-block mb-3 btn btn-danger"
              onClick={() => {
                this.handleChangeColor("red");
              }}
            >
              Red Car
            </button>
            <button
              className="d-block mb-3 btn btn-success"
              onClick={() => {
                this.handleChangeColor("silver");
              }}
            >
              Silver Car
            </button>
            <button
              className="d-block mb-3 btn btn-warning"
              onClick={() => {
                this.handleChangeColor("steel");
              }}
            >
              Steel Car
            </button>
          </div>
        </div>
      </div>
    );
  }
}
