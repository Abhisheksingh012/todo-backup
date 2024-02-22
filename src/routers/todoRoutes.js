const express = require('express');
const router = express.Router();

const { getTodoList,addInTodoList,editTodoList } = require("../controllers/todoController");

router.get('/',getTodoList );

router.post('/', addInTodoList);

router.put('/:id',editTodoList );

module.exports = router;
