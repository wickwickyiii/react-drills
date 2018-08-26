import React, { Component } from "react";
import "./App.css";
import Todo from "./components/Todo";
import List from "./components/List";
import NewTask from "./components/NewTask";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      newTask: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
        <div key={i}>
          <Todo listItem={e} />
        </div>
      );
    });

    return (
      <div className="App">
        <header>
          <h1>My to-do list:</h1>
        </header>
        <div>
          <List newTask={this.handleChange} />
          <NewTask addTask={this.handleClick} />
        </div>
        <div>{list}</div>
      </div>
    );
  }
}

export default App;
