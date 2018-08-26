import React, { Component } from "react";

export default class NewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button onClick={this.props.addTask}>Add</button>
      </div>
    );
  }
}
