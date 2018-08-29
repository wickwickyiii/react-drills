import React, { Component } from "react";
import "./App.css";
import router from "./router";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/details">Details</Link>
          <Link to="/signup">Signup</Link>
          {router}
        </nav>
      </div>
    );
  }
}

export default App;
