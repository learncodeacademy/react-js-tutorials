import React from "react";

import * as TodoActions from "../actions/TodoActions";

export default class NewTodo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      newTodo: ""
    };
  }

  addTodo(e) {
    e.preventDefault();
    TodoActions.createTodo(this.state.newTodo);
    this.setState({newTodo: ""});
  }

  handleChange(e) {
    this.setState({newTodo: e.target.value});
  }

  render() {
    const inputStyling = {
      borderRadius: "10px",
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "#B19FBA",
      marginRight: "20px",
      minWidth: "200px",
      backgroundColor: "#D8CFDD",
      padding: "3px 15px 3px 15px"
    };

    const formStyling = {
      paddingBottom: "10px"
    };

    const standardButton = {
      borderRadius: "10px",
      borderStyle: "none",
      padding: "3px 15px 3px 15px",
      fontFamily: "Roboto",
      backgroundColor: "#765786",
      color: "#FFF"
    };

    return (
      <form style={formStyling}>
        <input style={inputStyling} type="text" value={this.state.newTodo} onChange={this.handleChange.bind(this)}/>
        <button style={standardButton} onClick={this.addTodo.bind(this)}>Add New</button>
      </form>
    );
  }
}
