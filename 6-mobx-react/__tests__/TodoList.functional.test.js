import { shallow } from 'enzyme'
import React from "react"

import TodoList from "../src/js/TodoList"
import { TodoStore } from "../src/js/TodoStore"

describe("TodoList.functional", () => {

  it("filters todos", () => {
    const store = new TodoStore

    store.createTodo("todo1")
    store.createTodo("todo2")
    store.createTodo("todo3")
    store.filter = "2"

    const wrapper = shallow(<TodoList store={store} />)

    expect(wrapper.find("li").length).toBe(1)
    expect(wrapper.find("li span").at(0).text()).toBe("todo2")
  })

  it("clears completed todos when 'clear completed' is clicked", () => {
    const store = new TodoStore

    store.createTodo("todo1")
    store.createTodo("todo2")
    store.createTodo("todo3")
    store.todos[0].complete = true
    store.todos[1].complete = true

    const wrapper = shallow(<TodoList store={store} />)

    wrapper.find("a").simulate("click")

    expect(wrapper.find("li").length).toBe(1)
    expect(wrapper.find("li span").at(0).text()).toBe("todo3")
    expect(store.todos.length).toBe(1)
  })
})
