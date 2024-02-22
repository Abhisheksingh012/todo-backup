const Count = require('../models/count.js');
const TodoItem = require('../models/todoItem.js');
const addInTodoList = async (req, res) => {
    try {
      const todo = await TodoItem.create(req.body);
      await Count.findOneAndUpdate({}, { $inc: { postCount: 1 } });
      res.status(201).json(todo);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
const editTodoList = async (req, res) => {
    try {
      const todo = await TodoItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
      await Count.findOneAndUpdate({}, { $inc: { putCount: 1 } });
      res.json(todo);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
const getTodoList = async (req, res) => {
    try {
      const todos = await TodoItem.find();
      res.json(todos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
module.exports = {
  addInTodoList,
  editTodoList,
  getTodoList,
};
