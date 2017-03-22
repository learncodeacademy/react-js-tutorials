import React from "react";

import * as TodoActions from "../actions/TodoActions";

export default class Todo extends React.Component {
  constructor(props) {
    super();
  }

  removeTodo(e) {
    // console.log(this.props.id);
    //REMOVE BY ID
    TodoActions.deleteTodo(this.props.id);
  }

  render() {
    const { complete, edit, text } = this.props;

    const icon = complete ? "\u2714" : "\u2716"

    if (edit) {
      return (
        <li>
          <input value={text} focus="focused"/>
        </li>
      );
    }

    return (
      <li>
        <button onClick={this.removeTodo.bind(this)}>{icon}</button>
        <span>{text}</span>
      </li>
    );
  }
}
