import React from "react";
import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";

const Todo = ({ todo }) => (
  <ListGroup.Item>
    <span className="todo-item__text">{todo}</span>
  </ListGroup.Item>
);

// export default Todo;
export default connect(null)(Todo);
