import Axios from "axios";
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILED } from "./constans";

export const actFetchLogin = (user, history) => {
  return dispatch => {
    dispatch(actLoginRequest());
    Axios({
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user
    })
      .then(result => {
        dispatch(actLoginSuccess(result.data));
        if (result.data.maLoaiNguoiDung === "QuanTri") {
          localStorage.setItem("userAdmin", JSON.stringify(result.data));
          // Chuyen huong qua trang Dashboard
          history.push("/dashboard");
        } else {
          alert("K co quyen truy cap!");
        }
      })
      .catch(err => {
        dispatch(actLoginFailed(err));
      });
  };
};

const actLoginRequest = () => {
  return {
    type: AUTH_REQUEST
  };
};

const actLoginSuccess = data => {
  return {
    type: AUTH_SUCCESS,
    data
  };
};

const actLoginFailed = err => {
  return {
    type: AUTH_FAILED,
    err
  };
};
