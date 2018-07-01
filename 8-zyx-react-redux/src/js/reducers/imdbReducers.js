export default function reducer(state={
    topRatedMovies: [],
    fetchingTopRatedMovies: false,
    fetchedTopRatedMovies: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_TOP_RATED_MOVIES": {
        return {...state, fetchingTopRatedMovies: true}
      }
      case "FETCH_TOP_RATED_MOVIES_REJECTED": {
        return {...state, fetchingTopRatedMovies: false, error: action.payload}
      }
      case "FETCH_TOP_RATED_MOVIES_FULFILLED": {
        return {
          ...state,
          fetchingTopRatedMovies: false,
          fetchedTopRatedMovies: true,
          topRatedMovies: action.payload
        }
      }
    }
    return state
}
