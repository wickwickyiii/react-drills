import React from "react";

const List = props => (
  <input onChange={e => props.newTask(e)} placeholder="Enter New Task" />
);

export default List;
