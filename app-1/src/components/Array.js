import React, { Component } from "react";

class Array extends Component {
  constructor() {
    super();
    this.state = {
      food: [
        "spaghetti",
        "ice cream",
        "sushi",
        "bologna",
        "cheese",
        "syrup",
        "coffee",
        "milk",
        "eggs",
        "steak",
        "chips",
        "fish",
        "chicken",
        "wine"
      ]
    };
  }

  render() {
    let ownLine = this.state.food.map((e, i, arr) => {
      return <p> {this.state.food[i]} </p>;
    });

    return (
      <div>
        <div> {ownLine} </div>
      </div>
    );
  }
}

export default Array;
