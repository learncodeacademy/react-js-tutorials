// Block Scoping
  // (old)
  var a = 1;
  function () {
    var b = 2;
  }
  console.log(b); // b not found because it is not in the same scope

  // or

  var a = 1;
  if (true) {
    var b = 2; // it will be in the global scope
  }

  console.log(b); // print 2

  // es6
  // let or const
  var a = 1;

  if(true){
    let b = 5; // only inside if block
  }

  // use const for everything

// classes
  class Parent {
    constructor(){

    }

    fun1() {

    }
    static fun2() {


    }
  }

  var parent = new Parent();
  patent.fun1()
  Parent.fun2()

  class Child extends Parent {
    constructor(){
      super()
    }
    baz(){

    }
  }



// generator functions

// arrow functions
  // (old)
  var foo = function (a, b) {
    return a + b;
  };

  // es6
  var foo = (a, b) => {
    return a + b
  }

  // (old)
  do.something(function(a, b) {
    return a + b;
  })

  // es6
  do.something((a, b) => {
    return a + b;
  })
  do.something((a, b) => return a + b)
  do.something((a, b) => { return a + b; })

  // >

  do.something((a) => a + 1)
  do.something(a => a + 1)
  // ex
  [0,1,2].map(val => val++); // [1,2,3]

// laxueks binding

  var module = {
    age: 22,
    foo: function () {
      console.log(this.age);
      setTimeInterval(function () {
        console.log(this.age); // it will not working because this point setTimeInterval function
      }, 1000)  // solusion using bind(this) or arrow function
    }
  }

  // arrow be careful when you use it with jQuery!!!


// module system
  // (old)

  // myModule file
  module.exports.foo = function () {

  }

  module.exports.bar = function () {

  }

  // or
  export default function functionName() {

  }

  // or
  export function foo() {

  }



  // in another file
  var myModule = require('myModule');

  // es6
  import myModule from "myModule";
  // or
  import { foo, bar } from "myModule";

  // as
  import { foo as f, bar } from "myModule";


// async return promise 
  async function () {
    var friends = await $.get('http:/somesite.com/friends');
    console.log(friends);
  }
