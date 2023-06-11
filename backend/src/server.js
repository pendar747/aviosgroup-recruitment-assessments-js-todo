const express = require("express");
const cors = require("cors");
const repository = require("./repository/todo");
const todoService = require("./service/todo")(repository);

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  server.get("/api/todo", async (req, res) => {
    res.json(await todoService.getTodos());
  });

  server.post("/api/todo", async (req, res, next) => {
    try {
      await todoService.addTodo(req.body);
      const todos = await todoService.getTodos();
      res.json(todos);
    } catch (error) {
      next(error);
    }
  });

  return server;
};
module.exports = server;
