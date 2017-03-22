import React from "react";

import Todo from "../components/Todo";
import NewTodo from "../components/Todo";
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
    console.log("??");
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

    const headerStyling = {
      fontFamily: "Roboto",
      color: "#3C1053",
      marginBottom: "20px"
    };

    const inputStyling = {
      borderRadius: "10px",
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "#B19FBA",
      marginRight: "20px",
      minWidth: "200px",
      backgroundColor: "#D8CFDD",
      padding: "3px 15px 3px 15px"
    }

    const formStyling = {
      paddingBottom: "10px"
    }

    const standardButton = {
      borderRadius: "10px",
      borderStyle: "none",
      padding: "3px 15px 3px 15px",
      fontFamily: "Roboto",
      backgroundColor: "#765786",
      color: "#FFF"
    }

    return (
      <div>
        <h1 style={headerStyling}>A List of things To Do</h1>
        <form style={formStyling}>
          <input style={inputStyling} type="text" value={this.state.newTodo} onChange={this.handleChange.bind(this)}/>
          <button style={standardButton} onClick={this.addTodo.bind(this)}>Add New</button>
        </form>
        <ul style={customUl}>{TodoComponents}</ul>
      </div>
    );
  }
}
