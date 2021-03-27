import Axios from "axios";
import { FETCH_LIST_MOVIE } from "./../contants";

const actFetchListMovie = () => {
  return (dispatch) => {
    Axios({
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03",
      method: "GET",
    })
      .then((result) => {
        dispatch(actListMovie(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const actListMovie = (listMovie) => {
  return {
    type: FETCH_LIST_MOVIE,
    data: listMovie,
  };
};

export { actFetchListMovie };
