//WHAT ARE PROMISES?

//promises represent future values...values that may or may not have been grabbed yet
//"promise syntax" frees us from having to use callbacks by using then()
//promises are used by jQuery as well as other libraries such as Bluebird, Q, When, Async
//promises all have a .then(success, error) method that accepts 2 functions
//let's start getting profile.json, returns a promise
var getProfile = $.ajax({type: 'GET', url: 'profile.json'});

//of course, that doesn't do us any good, because once the profile is received, nothing happens
//let's add a .then()
getProfile.then(
  function(data){
    console.log(data);
  }, function(xhr, state, error) {
    console.log(arguments);
  }
);

//so off-the-bat, it looks more complicated than using success & error
//the cool thing about promises, is they can be chained.
//the value that .then() returns is passed to the next .then()
//if .then() returns a promise object, it waits for that promise to fulfill
//before firing the next .then()
//if .then() #1 has an error, all the others are skipped and the last error function receives the error
$.get('profile.json').then(function(profile){
  return $.get('friend.json?id='+profile.id);
}).then(function(friend) {
  //do something with friend
}, function(xhr, status, error) {
  //do something with the errors from either action
});

// what if I want to do several things at once?
// create the promises
var getProfile = $.get('profile.json');
var getFriend = $.get('friend.json');
//pass them to the $.when() function
$.when(getProfile, getFriend).then(function(profile, friend) {
  //each response is an array of the 3 items passed to a jQuery success: [data, status, xhr]
  console.log(profile[0]); //profile
  console.log(friend[0]); //friend
}, function() {
  //handle error
});
