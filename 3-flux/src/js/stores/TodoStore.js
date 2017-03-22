import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = [
      {
        id: 113464613,
        text: "Go Shopping",
        complete: true
      },
      {
        id: 235684679,
        text: "Pay Water Bill",
        complete: false
      },
    ];
  }

  createTodo(text) {
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false,
    });
    // this.emit("change");
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((entry) => {
      return entry.id !== id;
    });
    // this.emit("change");
  }

  getAll() {
    return this.todos;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
        this.emit("change");
        break;
      }
      case "RECEIVE_TODOS": {
        this.todos = action.todos;
        this.emit("change");
        break;
      }
      case "DELETE_TODO": {
        this.deleteTodo(action.id);
        this.emit("change");
        break;
      }
    }
  }

}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
