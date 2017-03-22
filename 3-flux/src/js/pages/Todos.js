import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";


export default class Todos extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
      newTodo: ""
    };
  }

  componentWillMount() {
    TodoStore.on("change", this.getTodos);
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll(),
    });
  }

  reloadTodos() {
    TodoActions.reloadTodos();
  }

  // Start Anna Code
  addTodo(e) {
    e.preventDefault();
    TodoActions.createTodo(this.state.newTodo);
    this.setState({newTodo: ""});
  }

  handleChange(e) {
    this.setState({newTodo: e.target.value});
  }
  // End Anna Code

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });

    const customUl = {
      listStyle: "none",
      paddingLeft: "0"
    };

    return (
      <div>
        <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
        <h1>Todos</h1>
        <form>
          <input type="text" value={this.state.newTodo} onChange={this.handleChange.bind(this)}/>
          <button onClick={this.addTodo.bind(this)}>Add Todo</button>
        </form>
        <ul style={customUl}>{TodoComponents}</ul>
      </div>
    );
  }
}
