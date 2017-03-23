import React from "react";

import * as TodoActions from "../actions/TodoActions";

export default class Todo extends React.Component {
  constructor(props) {
    super();
  }

  deleteTodo(e) {
    TodoActions.deleteTodo(this.props.id);
  }

  render() {
    const { complete, edit, text } = this.props;

    const icon = complete ? "../../assets/icon_done.svg" : "../../assets/icon_not_done.svg";
    const trash = "../../assets/icon_trash.svg";

    const trashStyle = {
      maxWidth: "50px",
      padding: "5px"
    };

    const checkboxStyle = {
      maxWidth: "50px",
      padding: "10px"
    };

    if (edit) {
      return (
        <li>
          <input value={text} focus="focused"/>
        </li>
      );
    }

    return (
      <li>
        <span><img style={checkboxStyle} src={icon} /></span>
        <span onClick={this.deleteTodo.bind(this)}><img style={trashStyle} src={trash} /></span>
        <span>{text}</span>
      </li>
    );
  }
}
