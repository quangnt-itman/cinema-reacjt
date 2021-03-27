import {
  DETAIL_MOVIE_REQUEST,
  DETAIL_MOVIE_SUCCESS,
  DETAIL_MOVIE_FAILED
} from "./constants";

let initialState = {
  loading: false,
  detailMovie: {},
  err: null
};

const detailMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_MOVIE_REQUEST:
      state.loading = true;
      state.detailMovie = {};
      state.err = null;
      return { ...state };

    case DETAIL_MOVIE_SUCCESS:
      state.loading = false;
      state.detailMovie = action.data;
      state.err = null;
      return { ...state };

    case DETAIL_MOVIE_FAILED:
      state.loading = false;
      state.detailMovie = {};
      state.err = action.err;
      return { ...state };

    default:
      return { ...state };
  }
};

export default detailMovieReducer;
