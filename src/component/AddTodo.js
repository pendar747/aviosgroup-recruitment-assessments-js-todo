import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = React.useState("");
  const handleSubmit = (event) => {
    if (!todo) {
      return;
    }
    event.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };
  return (
    <Form onSubmit={handleSubmit} className="pt-4 pb-4 bg-white sticky-bottom">
      <div className="row">
        <div className="col-10">
          <Form.Control
            required={true}
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
            name="todo"
            type="text"
            placeholder="Todo.."
          />
        </div>
        <div className="col-2">
          <Form.Control type="submit" as={Button}>
            Add
          </Form.Control>
        </div>
      </div>
    </Form>
  );
};

export default AddTodo;
