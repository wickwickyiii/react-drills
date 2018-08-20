import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    }
  }


  render() {

    let foodsList = this.state.foods.map((e, i) => {
      return (
        <h2 key={i}>{e}</h2>
      )
    })

    return (
      <div className="App">
        {foodsList}
      </div>
    );
  }
}

export default App;
