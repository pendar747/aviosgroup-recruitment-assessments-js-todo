const repository = require("../../src/repository/todo");

describe("TODO repository", () => {
  it("should return the todo list", async () => {
    const expected = {
      todos: [
        {
          task: "This is a todo example",
        },
      ],
    };
    const actual = await repository.getTodos();
    expect(actual).toEqual(expected);
  });

  it("should add a todo", async () => {
    const expected = {
      todos: [
        {
          task: "This is a todo example",
        },
        {
          task: "This is a new todo",
        },
      ],
    };
    const todo = {
      task: "This is a new todo",
    };
    await repository.addTodo(todo);
    const actual = await repository.getTodos();
    expect(actual).toEqual(expected);
  });

  it("should respond with a rejected promise if the todo is not valid", () => {
    const todo = {};

    return expect(repository.addTodo(todo)).rejects.toThrow("Invalid todo");
  });
});
