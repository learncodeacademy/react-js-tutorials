
//GENERATORS ARE AWESOME!!!!
//use with Traceur: https://github.com/google/traceur-compiler
//find out how this works: look at what-are-generators.js
var $status = $('#status');

Promise.coroutine(function* () {

  var profile = yield $.get('profile.json');
  $status.append('<li>got profile</li>');
  $('#profile-pre').html(JSON.stringify(profile));

  var tweets = yield $.get('tweets.json?id='+profile.id);
  $status.append('<li>got tweets</li>');
  $('#tweets-pre').html(JSON.stringify(tweets));

  var friend = yield $.get('friend.json?id='+tweets[0].usersMentioned[0].id);
  $status.append('<li>got friend</li>');
  $('#friend-pre').html(JSON.stringify(friend));

})().catch(function(errs) {
  //handle errors on any events
})

//WHAT??!!!!!!  What just happened??
//Every time you yield a value, it waits for that promise to resolve
//once it resolves, it passes it's value to the variable and resumes
//But that seems like magic.  "Wrong...it IS magic"

//see what-are-generators.js for more examples
