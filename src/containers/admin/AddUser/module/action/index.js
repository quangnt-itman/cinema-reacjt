import Axios from "axios";
import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILED
} from "./../constants";

export const actFetchAddUser = user => {
  let token = "";
  if (localStorage.getItem("userAdmin")) {
    token = JSON.parse(localStorage.getItem("userAdmin")).accessToken;
  }
  return dispatch => {
    dispatch(actAddUserRequest());
    Axios({
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      method: "POST",
      data: user,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(result => {
        dispatch(actAddUserSuccess(result.data));
      })
      .catch(err => {
        dispatch(actAddUserFailed(err));
      });
  };
};

const actAddUserRequest = () => {
  return {
    type: ADD_USER_REQUEST
  };
};

const actAddUserSuccess = data => {
  return {
    type: ADD_USER_SUCCESS,
    data
  };
};

const actAddUserFailed = err => {
  return {
    type: ADD_USER_FAILED,
    err
  };
};
