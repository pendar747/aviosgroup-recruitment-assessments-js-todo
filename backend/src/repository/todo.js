let todoList = {
  todos: [
    {
      task: "This is a todo example",
    },
  ],
};

module.exports = {
  getTodos: () => Promise.resolve(todoList),
  addTodo: async (todo) => {
    if (!todo || typeof todo.task !== "string") {
      throw new Error("Invalid todo");
    }
    todoList.todos.push(todo);
    return todoList;
  },
};
