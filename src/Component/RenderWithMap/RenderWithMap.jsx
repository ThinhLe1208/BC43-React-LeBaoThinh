import React, { Component } from "react";

export default class RenderWithMap extends Component {
  products = [
    { id: 1, name: "red car", price: 1000, img: "./img/products/red-car.jpg" },
    { id: 2, name: "silver car", price: 1000, img: "./img/products/silver-car.jpg" },
    { id: 3, name: "black car", price: 1000, img: "./img/products/black-car.jpg" },
    { id: 4, name: "steel car", price: 1000, img: "./img/products/steel-car.jpg" },
  ];

  renderProduct = () => {
    return this.products.map((product) => {
      return (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img src={product.img} alt="..." style={{ width: "50px" }} />
          </td>
        </tr>
      );
    });
  };

  renderProductCol = () => {
    return this.products.map((product) => {
      return (
        <div className="col-3 p-3" key={product.id}>
          <div className="card p-1">
            <img className="card-img-top" src={product.img} alt="Title" />
            <div className="card-body">
              <h4 className="card-title text-capitalize">{product.name}</h4>
              <p className="card-text">{product.price}$</p>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3>Danh sach san pham</h3>
        <table className="table text-white">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
            </tr>
          </thead>
          <tbody>{this.renderProduct()}</tbody>
        </table>

        <hr />

        <h3 className="text-center">Product list</h3>
        <div className="row">{this.renderProductCol()}</div>
      </div>
    );
  }
}
