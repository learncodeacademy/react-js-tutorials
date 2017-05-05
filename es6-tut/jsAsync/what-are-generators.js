

//what are generators?
//they're pausable functions, pausable iterable objects, to be more precise
//they're defined with the *
var myGen = function*() {
  var one = yield 1;
  var two = yield 2;
  var three = yield 3;
  console.log(one, two, three);
};
var gen = myGen(); //get the generator ready to run
//when you run next() on a generator, it runs until a yield, then waits until next() is called again
console.log(gen.next()); //{value:1, done: false}
console.log(gen.next()); //{value:2, done: false}
console.log(gen.next()); //{value:3, done: false}
console.log(gen.next()); //{value:undefined, done: true}
console.log(gen.next()); //errors because you can't call next() on a closed generator

//so yippee, when do I ever have to yield numbers?  Seems silly
//the magic happens when smarter code wraps the generator
function smartCode(generator) {
  var gen = generator();
  var yieldedVal = gen.next();
  if(yieldedVal.then) {
    //it's a promise!!!
    yieldedVal.then(gen.next);
  }
}

//enter libraries like Co, Bluebird, Q...let's use Bluebird
Promise.coroutine(function* () {
  var tweets = yield $.get('tweets.json');
  console.log(tweets);
})();
//Bluebird runs the generator, notices yield is a promise
//so it waits on that promise, then passes it's value back to the generator when complete




//here, it runs them in sequence, waiting for each to complete before proceeding
Promise.coroutine(function* () {
  var tweets = yield $.get('tweets.json');
  var profile = yield $.get('profile.json');
  var friends = yield $.get('friends.json');
  console.log(tweets, profile, friends);
})();




//if you want to run them at the same time, yield an object or an array
Promise.coroutine(function* () {
  var data = yield {
    tweets: $.get('tweets.json'),
    profile: yield $.get('profile.json')
  };
  console.log(data.tweets, data.profile);
})();

Promise.coroutine(function* () {
  var [tweets, profile] = yield [$.get('tweets.json'), yield $.get('profile.json')];
  console.log(tweets, profile);
})();
