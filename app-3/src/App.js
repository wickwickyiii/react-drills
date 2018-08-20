import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      foods: ["spaghetti", "ice cream", "bologna", "coffee", "cheese", "sushi"]
    }
  }

  handleChange(e) {
    this.setState({ message: e.target.value })
  }


  render() {

    let groceryList = this.state.foods.filter((e, i) => {
      return e.includes(this.state.message);
    })
      .map((e, i) => {
        return (
          <h2 key={i}>{e}</h2>
        )
      })


    return (
      <div className="App">
        <input onChange={e => this.handleChange(e)}></input>

        <div>
          {groceryList}
        </div>
      </div>
    );
  }
}

export default App;
