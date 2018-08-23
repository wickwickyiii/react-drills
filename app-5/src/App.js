import React, { Component } from "react";
import "./App.css";
import Image from "./components/Image";

class App extends Component {
  constructor() {
    super();
    this.state = {
      img:
        "https://icdn3.digitaltrends.com/image/destiny-2-review-14458-1200x630-c-ar1.91.jpg"
    };
  }

  render() {
    return (
      <div className="App">
        <Image pic={this.state.img} />
      </div>
    );
  }
}

export default App;
