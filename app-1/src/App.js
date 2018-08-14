import React, { Component } from "react";
// import Props from "./components/Props";
import Input from "./components/Input";
// import Array from './components/Array';
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // input: "",
      // food: [
      //   "spaghetti",
      //   "ice cream",
      //   "sushi",
      //   "cheese",
      //   "eggs",
      //   "milk",
      //   "coffee",
      //   "syrup",
      //   "wine"
      // ],
      // filteredFood: []
    };
    // this.filter = this.filter.bind(this);
  }

  // filter(e) {
  //   let newArr = [];
  //   this.setState({ input: e.target.value });
  //   for (var i = 0; this.state.food.length; i++) {
  //     if (this.state.food.includes(e)) {
  //       newArr.push(this.state.food[i]);
  //     }
  //   }
  //   this.setState({ filteredFood: newArr });
  // }

  render() {
    return (
      <div className="App">
        <Input />
        {/* <Props filter={this.filter} /> */}
        {/* <div>{JSON.stringify(this.state.food)}</div> */}
      </div>
    );
  }
}

export default App;
