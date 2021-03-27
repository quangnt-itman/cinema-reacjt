import {
  DETAIL_MOVIE_REQUEST,
  DETAIL_MOVIE_SUCCESS,
  DETAIL_MOVIE_FAILED
} from "./constants";
import Axios from "axios";

const actFetchDetailMovie = id => {
  return dispatch => {
    dispatch(actDetailMovieRequest());
    Axios({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET"
    })
      .then(result => {
        dispatch(actDetailMovieSuccess(result.data));
      })
      .catch(err => {
        dispatch(actDetailMovieFailed(err));
      });
  };
};

const actDetailMovieRequest = () => {
  return {
    type: DETAIL_MOVIE_REQUEST
  };
};

const actDetailMovieSuccess = data => {
  return {
    type: DETAIL_MOVIE_SUCCESS,
    data
  };
};

const actDetailMovieFailed = err => {
  return {
    type: DETAIL_MOVIE_FAILED,
    err
  };
};

export { actFetchDetailMovie };
