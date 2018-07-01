import React from "react"
import { connect } from "react-redux"
import { fetchTopRatedMovies } from "../actions/imdbActions"
import singleMovie from "./singleMovie"


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
    const mappedTopRatedMovies = topRatedMovies.map(topRatedMovie =>
	    <li>
	     <img src={"https://image.tmdb.org/t/p/w500" + topRatedMovie.poster_path}></img>
	     <h6>{topRatedMovie.title}</h6>
	     <h6>{topRatedMovie.overview}</h6>
	     <h6>{topRatedMovie.release_date}</h6>
	    </li>);
    return <div>
      <h1>Top Rated Movies</h1>
      <ul>{mappedTopRatedMovies}</ul>
    </div>
  }
}
