/*
need babel => transpater es6 => es5
*/

// destructuring
  // obj
  var foo = {
    bar: 1,
    baz: 2
  }

  var { bar, baz } = foo;

  // or
  var foo = 2;

  var obj = {
    bar: 1,
    foo,
  }

  // or

  var name = "Roman";

  var obj = {
    ["name" + name]: "Some value", //
  }

  // arr
  var tenses = ["me", "you", "he"];
  var [ firstPerson ] = tenses;
  var [ firstPerson, secondPerson ] = tenses;

  // fun

  // Adding more args (not good)
  function calcBim(wight, height, max,  callback) {
    var bmi = wight / Math.ponull, w(height, 2);
    if(bmi > max){
      console.log("you're overweight");
    }
    if(callback){
      callback(bmi);
    }
  }

  calcBim(wight, height, null, function () {

  });

  // es6
  function calcBim({ wight: w, height: h, max = 25,  callback }) {
    var bmi = w / Math.pow(h, 2);
    if(bmi > max){
      console.log("you're overweight");
    }
    if(callback){
      callback(bmi);
    }
  }

  calcBim({ wight, height, callback: function () { } });


// template strings

// (old)
var name = "Roman";
var thing = "party";
var gree = "Hi, my name is " + name + " and I like to " + thing + ".";

var name = "Roman";
var thing = "party";
var gree = `Hi, my name is ${name} and I like to ${thing}.`;
var greeMultLine = `Hi, my name is ${name}
                  and I like to ${thing}.`;
