// jQuery
// let's have some async fun!

var $status = $('#status');

//get profile, then tweets, then mentioned friend
$.ajax({
  type: 'GET',
  url: 'profile.json', //GETting a JSON file acts just like hitting an API
  success: getTweets,
  error: handleError
});

function getTweets(profile) {
  $status.append('<li>got profile</li>');
  $('#profile-pre').html(JSON.stringify(profile));
  //get tweets, passing our profile id
  $.ajax({
    type: 'GET',
    url: 'tweets.json?id=' + profile.id,
    success: getMentionedUser,
    error: handleError
  });
}
function getMentionedUser(tweets) {
  $status.append('<li>got tweets</li>');
  $('#tweets-pre').html(JSON.stringify(tweets));
  //get friend mentioned in first tweet
  $.ajax({
    type: 'GET',
    url: 'friend.json?id=' + tweets[0].usersMentioned[0].id,
    success: function(friend) {
      $status.append('<li>got mentioned friend</li>');
      $('#friend-pre').html(JSON.stringify(friend));
    },
    error: handleError
  });
}
function handleError(xhr, status, error) {
  $status.append('<li>error:'+error.toString()+'</li>');
}
