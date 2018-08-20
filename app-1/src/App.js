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
      message: ""
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ message: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e)}></input>
        <p> {this.state.message} </p>
      </div>
    );
  }
}

export default App;
