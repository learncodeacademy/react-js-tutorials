import { TodoStore } from "../src/js/TodoStore"

describe("TodoStore", () => {
  it("creates new todos", () => {
    const store = new TodoStore
    store.createTodo("todo1")
    store.createTodo("todo2")
    expect(store.todos.length).toBe(2)
    expect(store.todos[0].value).toBe("todo1")
    expect(store.todos[1].value).toBe("todo2")
  })

  it("clears checked todos", () => {
    const store = new TodoStore
    store.createTodo("todo1")
    store.createTodo("todo2")
    store.createTodo("todo3")
    store.todos[1].complete = true;
    store.todos[2].complete = true;
    store.clearComplete()

    expect(store.todos.length).toBe(1)
    expect(store.todos[0].value).toBe("todo1")
  })
})
