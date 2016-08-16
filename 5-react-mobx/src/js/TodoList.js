import React from "react"
import { observer } from "mobx-react"


@observer
export default class TodoList extends React.Component {
  create(e) {
    if (e.which === 13) {
      this.props.store.createTodo(e.target.value)
      e.target.value = ""
    }
  }

  filter(e) {
    this.props.store.filter = e.target.value
  }

  toggleComplete(todo) {
    todo.complete = !todo.complete
  }

  render() {
    const todos = this.props.store.filteredTodos.map(todo => (
      <li key={todo.id}>
        <input type="checkbox" value={todo.complete} onChange={this.toggleComplete.bind(this, todo)} /> <span>{todo.value}</span>
      </li>
    ))

    return (
      <div >
        <h1>todos</h1>
        <input placeholder="create new" onKeyPress={this.create.bind(this)} />
        <input placeholder="filter todos" value={this.props.store.filter} onChange={this.filter.bind(this)} />
        <ul>{todos}</ul>
        <a href="#" onClick={this.props.store.clearComplete}>Clear Completed</a>
      </div>
    )
  }
}
