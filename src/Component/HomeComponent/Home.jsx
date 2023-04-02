import React, { Component } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="bg-dark text-success p-3 fs-3 text-start">HomeComponent</div>;
        <Header />
        <div className="row g-0">
          <div className="col-4">
            <Navigation />
          </div>
          <div className="col-8">
            <Content />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
