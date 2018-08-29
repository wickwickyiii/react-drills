import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {}
    };
  }

  componentDidMount() {
    axios
      .get("https://swapi.co/api/people/1/")
      .then(res =>
        this.setState({
          person: res.data
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.person);
    let luke = this.state.person.name;
    let height = this.state.person.height;
    let hairColor = this.state.person.hair_color;
    let eyeColor = this.state.person.eye_color;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <p>Name: {luke}</p>
          <p>Height: {height}</p>
          <p>Hair Color: {hairColor}</p>
          <p>Eye Color: {eyeColor}</p>
        </div>
      </div>
    );
  }
}

export default App;
