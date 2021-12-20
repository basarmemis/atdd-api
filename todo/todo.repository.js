const Todo = require('./todo');

class TodoRepository {
    constructor() {
        this.Todos = [
            new Todo(1, "Do HomeWork", false, false),
            new Todo(2, "Go Shopping", false, false),
            new Todo(3, "Pay Loan", false, false),
        ];
        this.lastId = this.Todos.length;
    }

    async getAll() {
        return [...this.Todos]
    }

    async getById(id) {
        const requestedTodo = this.Todos.find(todo => todo.id === id);
        return requestedTodo;
    }

    async addTodo(name) {
        const todo = new Todo(this.lastId + 1, name, false, false)
        this.Todos.push(todo);
        this.lastId++;
        return todo;
    }

    async deleteById(id) {
        this.Todos = this.Todos.filter(todo => todo.id !== id);
    }

    async updateById(id, name, completed) {
        const requestedTodo = this.Todos.find(todo => todo.id === id);
        requestedTodo.name = name;
        requestedTodo.completed = completed;
    }
}

module.exports = TodoRepository;
