import mobx from "mobx"
import { computed, observable} from "mobx"

class Todo {
  @observable value
  @observable id
  @observable complete

  constructor(value) {
    this.value = value
    this.id = Date.now()
    this.complete = false
  }
}

export class TodoStore {
  @observable todos = []
  @observable filter = ""

  @computed get filteredTodos() {
    return this.todos.filter(todo => !this.filter || todo.value.toLowerCase().match(this.filter.toLowerCase()))
  }

  clearComplete = () => {
    this.todos.replace(this.todos.filter(todo => !todo.complete))
  }

  createTodo(value) {
    this.todos.push(new Todo(value))
  }
}

export default new TodoStore

