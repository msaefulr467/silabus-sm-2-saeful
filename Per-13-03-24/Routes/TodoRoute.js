const express = require('express');
const router = express.Router();

const TodoController = require('../Controllers/TodoController');

router.get('/', TodoController.getAllTodo);
router.post('/', TodoController.storeTodo);
router.put('/', TodoController.updateTodo);
router.delete('/:id', TodoController.deleteTodo);
router.get('/:id', TodoController.showTodo);
router.put('/:id', TodoController.updateTodo);

module.exports = router;