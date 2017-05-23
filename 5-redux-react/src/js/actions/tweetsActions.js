import axios from "axios";

export function fetchTweets() {
  const TWEETS_USER = 'learncode';

  function filterPayloadDataToReturn(data) {
    if (!Array.isArray(data)) return [];
    return data.filter(value => !!value).reduce((merge, value) => {
      if (value.myArray && Array.isArray(value.myArray)) {
        merge = merge.concat(value.myArray)
      }
      return merge
    }, [])
  }

  function buildTweetsUrl(user) {
    return `http://rest.learncode.academy/api/${user}/tweets`
  }

  function requestTweets(url, done) {
    axios.get(url).then(response => done(null, response)).catch(err => done(err, null))
  }
  
  return function(dispatch) {
    dispatch({type: "FETCH_TWEETS"});
    
    /* 
      http://rest.learncode.academy is a public test server, so another user's experimentation can break your tests
      If you get console errors due to bad data:
      - change "reacttest" below to any other username
      - post some tweets to http://rest.learncode.academy/api/yourusername/tweets
    */
    requestTweets(buildTweetsUrl(TWEETS_USER), (err, response) => {
      if (err || !response && !response.data || Array.isArray(response.data) && !response.data.length) {
        return dispatch({type: "FETCH_TWEETS_REJECTED", payload: err || new Error('Tweets are empty')})
      }
      return dispatch({type: "FETCH_TWEETS_FULFILLED", payload: filterPayloadDataToReturn(response.data)})
    })
  }
}

export function addTweet(id, text) {
  return {
    type: 'ADD_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function updateTweet(id, text) {
  return {
    type: 'UPDATE_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function deleteTweet(id) {
  return { type: 'DELETE_TWEET', payload: id}
}
