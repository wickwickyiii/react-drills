import React, { Component } from "react";
// import Props from "./components/Props";
import Input from "./components/Input";
// import Array from './components/Array';
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

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
