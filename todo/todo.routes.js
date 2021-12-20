const router = require('express').Router();
const controller = require('./todo.controller');

router.get("/todos/:id", controller.getById);
router.get("/todos", controller.getAll);
router.post("/todos", controller.addTodo);
router.delete("/todos/:id", controller.deleteById);
router.put("/todos/:id", controller.updateById);

module.exports = router;