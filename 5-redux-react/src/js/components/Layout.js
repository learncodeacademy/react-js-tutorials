import React from "react"
import { connect } from "react-redux"

import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  fetchTweets() {
    this.props.dispatch(fetchTweets())
  }

  render() {
    const { user, tweets } = this.props;

    if (!tweets.length) {
      return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    }

    const mappedTweets = tweets.map(tweet => {
      const textValue = tweet.text;
      let tweetText = "";
      if(typeof textValue === 'object'){
        tweetText = textValue.tweet;
      }
      else{
        tweetText = textValue;
      }
      return (
        tweetText ? <li key={tweet.id}>{tweetText}</li> : null
      );
    })

    return <div>
      <h1>{user.name}</h1>
      <ul>{mappedTweets}</ul>
    </div>
  }
}
