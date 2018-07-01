import axios from "axios";

export function fetchTopRatedMovies() {
  return function(dispatch) {
    dispatch({type: "FETCH_TOP_RATED_MOVIES"});
    axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=0f301d956ac1b348d525e866a2afb495&language=en-US&page=1 ")
      .then((response) => {
        dispatch({type: "FETCH_TOP_RATED_MOVIES_FULFILLED", payload: response.data.results})
      })
      .catch((err) => {
        dispatch({type: "FETCH_TOP_RATED_MOVIES_REJECTED", payload: err})
      })
  }
}
