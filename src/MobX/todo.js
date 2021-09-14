import { makeAutoObservable } from 'mobx';

class Todo {
  todos = [
    { id: 1, title: 'Купить хлеб', done: false },
    { id: 2, title: 'Купить молоко', done: false },
    { id: 3, title: 'Купить масло', done: false },
  ];
  constructor() {
    makeAutoObservable(this);
  }

  addTodo(title) {
    this.todos.push({
      id: this.todos.length + 1,
      title: title,
      done: false,
    });
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  completeTodo(id) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
  }
}

export default new Todo();
