// Generators
// traceur
  // pusebale functoin until I call next()
  var myGen = function*() {
    var one = yield 1; // call from right to left
    var two = yield 2; // yield will stop the functoin at 2 in this point
    var three = yield 3;
    console.log(one, two, three); // undefined, undefined, undefined
  }

  var gen = myGen(); // get the generator ready to return

  console.log(gen.next()); // {value: 1, done: false}
  console.log(gen.next()); // {value: 2, done: false}
  console.log(gen.next()); // {value: 3, done: false}
  console.log(gen.next()); // {value: undefined, done: true}
  console.log(gen.next()); // errors because you can't call next() on a closed generator

  // if I want to make console.log inside myGen to work I have to pass value
  // the next() ex.

  console.log(gen.next()); // {value: 1, done: false}  Yield @ "var one = yield 1"
  console.log(gen.next(1)); // {value: 2, done: false}
  console.log(gen.next(2)); // {value: 3, done: false}
  console.log(gen.next(3)); // {value: undefined, done: true}
  console.log(gen.next()); // errors because you can't call next() on a closed generator

// here is the best part

// There is many library:
// 1. bluebird: client side
// 2. co: server side
// 3. q: is the provider in angular

// Using bluebird
Primise.coroutine(function* () {
  var tweets = yield $.get('tweets.json');
  console.log(tweets);
})();

// another way

Primise.coroutine(function* () {
  var tweets = yield $.get('tweets.json');
  var profile = yield $.get('profile.json');
  var freinds = yield $.get('freinds.json');
  console.log(tweets);
})();


// another way using it with obj
Primise.coroutine(function* () {
  var data = yield {
    tweets: $.get('tweets.json'),
    profile: $.get('profile.json')
  };

  console.log(data.tweets, data.profile);
})();



// another way using it with array
Primise.coroutine(function* () {
  var {tweets, profile} = yield [
    $.get('tweets.json'),
    $.get('profile.json')
  ];

  console.log(tweets, profile);
})();
