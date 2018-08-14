import React, { Component } from "react";
// import Array from './Array';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
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
      ],
      filteredFood: []
    };
    this.type = this.type.bind(this);
  }

  type(e) {
    this.setState({ input: e.target.value });
    let filteredFood = [];
    for (var i = 0; i < this.state.food.length; i++) {
      if (this.state.food[i].includes(this.state.input)) {
        filteredFood.push(this.state.food[i]);
      }
    }
    this.setState({ filteredFood: filteredFood });
  }

  render() {
    let ownLine = this.state.input
      ? this.state.filteredFood.map(food => <p>{food}</p>)
      : this.state.food.map((e, i, arr) => {
          return <p> {this.state.food[i]} </p>;
        });

    return (
      <div>
        <input onChange={e => this.type(e)} />
        <div> {ownLine} </div>
      </div>
    );
  }
}

export default Input;
