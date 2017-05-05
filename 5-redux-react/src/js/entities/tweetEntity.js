export default class Tweet {
  constructor (value) {
    if (value.id && value.tweet) {
      this.id = value.id;
      this.text = value.tweet;
    }
  }
}