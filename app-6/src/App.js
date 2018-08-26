import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Todo from "./components/Todo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      newTask: ""
    };
  }

  handleChange(e) {
    this.setState({ newTask: e.target.value });
  }

  handleClick() {
    this.setState({
      tasks: [...this.state.tasks, this.state.newTask],
      newTask: ""
    });
  }

  render() {
    let list = this.state.tasks.map((e, i) => {
      return (
        <p>
          <Todo key={i} listItem={e} />
        </p>
      );
    });

    return (
      <div className="App">
        <header>
          <h1>My to-do list:</h1>
        </header>
        <div>
          <input
            onChange={e => this.handleChange(e)}
            placeholder="Enter New Task"
          />
          <button onClick={() => this.handleClick()}>Add</button>
        </div>
        <div>{list}</div>
      </div>
    );
  }
}

export default App;
