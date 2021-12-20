const TodoRepository = require('./todo.repository');

const repository = new TodoRepository();

exports.getAll = async (req, res, next) => {
    res.set("Content-Type", "application/json; charset=utf-8");
    res.send(await repository.getAll());
}

exports.getById = async (req, res, next) => {
    const todo = await repository.getById(Number(req.params.id));
    if (todo) {
        res.set("Content-Type", "application/json; charset=utf-8");
        res.send(todo);
    }
    else {
        res.status(404).send({ message: "Todo not found" });
    }
}

exports.addTodo = async (req, res, next) => {
    const body = await req.body;
    const todo = await repository.addTodo(body.name);
    res.set("Content-Type", "application/json; charset=utf-8");
    res.status(201).send(todo);
}

exports.deleteById = async (req, res, next) => {
    await repository.deleteById(Number(req.params.id));
    res.set("Content-Type", "application/json; charset=utf-8");
    res.status(200).send();
}

exports.updateById = async (req, res, next) => {
    const body = await req.body;
    await repository.updateById(Number(req.params.id), body.todo.name, body.todo.completed);
    res.set("Content-Type", "application/json; charset=utf-8");
    res.status(200).send();
}