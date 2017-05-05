// let's have some async fun!

var $status = $('#status');

/*
 * uses promise syntax, see what-are-promises.js
 */

//get profile, then tweets, then mentioned friend
$.get('profile.json').then(function(profile) {
  $status.append('<li>got profile</li>');
  $('#profile-pre').html(JSON.stringify(profile));
  return $.get('tweets.json?id=' + profile.id);
}).then(function(tweets) {
  $status.append('<li>got tweets</li>');
  $('#tweets-pre').html(JSON.stringify(tweets));
  //get friend mentioned in first tweet
  return $.get('friend.json?id=' + tweets[0].usersMentioned[0].id)
}).then(function(friend) {
  $status.append('<li>got mentioned friend</li>');
  $('#friend-pre').html(JSON.stringify(friend));
}, handleError);


function handleError(xhr, status, error) {
  $status.append('<li>error:'+error.toString()+'</li>');
}
