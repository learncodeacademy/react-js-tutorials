import React from "react"
import { connect } from "react-redux"

import { fetchTopRatedMovies } from "../actions/imdbActions"

@connect((store) => {
  return {
    topRatedMovies: store.imdb.topRatedMovies,
    fetchedTopRatedMovies: store.imdb.fetchedTopRatedMovies
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchTopRatedMovies())
  }

  render() {
    const {topRatedMovies} = this.props;
    const mappedTopRatedMovies = topRatedMovies.map(topRatedMovie => <li>{topRatedMovie.title}</li>)
    return <div>
      <h1>Top Rated Movies</h1>
      <ul>{mappedTopRatedMovies}</ul>
    </div>
  }
}
