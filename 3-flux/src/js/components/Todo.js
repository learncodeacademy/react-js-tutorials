import React from "react";

import * as TodoActions from "../actions/TodoActions";

export default class Todo extends React.Component {
  constructor(props) {
    super();
  }

// Anna Code Start
  removeTodo(e) {
    TodoActions.deleteTodo(this.props.id);
  }
// Anna Code End
  // const icon = complete ? "\u2714" : "\u2716"
  render() {
    const { complete, edit, text } = this.props;

    const icon = complete ? "../../assets/icon_done.svg" : "../../assets/icon_not_done.svg";
    const trash = "../../assets/icon_trash.svg";
    const iconStyle = {
      maxWidth: "50px",
      padding: "5px"
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
        <span><img style={iconStyle} src={icon} /></span>
        <span onClick={this.removeTodo.bind(this)}><img style={iconStyle} src={trash} /></span>
        <span>{text}</span>
      </li>
    );
  }
}
