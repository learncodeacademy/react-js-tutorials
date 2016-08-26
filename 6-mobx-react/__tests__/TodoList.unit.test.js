import { shallow } from 'enzyme'
import React from "react"

import TodoList from "../src/js/TodoList"

describe("TodoList", function() {
  //don't use an arrow function...preserve the value of "this"
  beforeEach(function() {
    this.store = {
      filteredTodos: [
        {value: "todo1", id: 111, complete: false},
        {value: "todo2", id: 222, complete: false},
        {value: "todo3", id: 333, complete: false},
      ],
      filter: "test",
      createTodo: (val) => {
        this.createTodoCalled = true
        this.todoValue = val
      },
    }
  })

  //don't use an arrow function, preserve the value of "this"
  it("renders filtered todos", function() {
    const wrapper = shallow(<TodoList store={this.store} />)

    expect(wrapper.find("li span").at(0).text()).toBe("todo1")
    expect(wrapper.find("li span").at(1).text()).toBe("todo2")
    expect(wrapper.find("li span").at(2).text()).toBe("todo3")
  })

  it("calls createTodo on enter", function() {
    const wrapper = shallow(<TodoList store={this.store} />)

    wrapper.find("input.new").at(0)
      .simulate("keypress", {which: 13, target: {value: 'newTodo'}})

    expect(this.createTodoCalled).toBe(true)
    expect(this.todoValue).toBe("newTodo")
  })

  it("updates store filter", function() {
    const wrapper = shallow(<TodoList store={this.store} />)

    wrapper.find("input.filter").at(0)
      .simulate('change', {target: {value: 'filter'}})

    expect(this.store.filter).toBe("filter")
  })

})
