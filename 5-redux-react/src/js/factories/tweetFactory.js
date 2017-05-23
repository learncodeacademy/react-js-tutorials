import Tweet from "../entities/tweetEntity"
import _ from "lodash"

export default class TweetFactory {
  constructor (data) {
    this.tweets = []
    if (Array.isArray(data)) {
      this.tweets = _.uniqBy(data, 'id').map(value => new Tweet(value))
    }
  }

  getAll () {
    return this.tweets
  }
}