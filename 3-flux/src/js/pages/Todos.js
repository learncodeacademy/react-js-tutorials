import React from "react";

import Todo from "../components/Todo";
import NewTodo from "../components/NewTodo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

export default class Todos extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll()
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

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });

    const customUl = {
      listStyle: "none",
      paddingLeft: "0"
    };

    const headerStyling = {
      fontFamily: "Roboto",
      color: "#3C1053",
      marginBottom: "20px"
    };

    return (
      <div>
        <h1 style={headerStyling}>To Do</h1>
        <NewTodo />
        <ul style={customUl}>{TodoComponents}</ul>
      </div>
    );
  }
}
