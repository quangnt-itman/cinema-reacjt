import React, { Component } from "react";
import { actFetchAddUser } from "./module/action";
import { connect } from "react-redux";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: ""
    };
  }

  handleOnchange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchAddUser(this.state);
  };

  render() {
    return (
      <div>
        <form className="container" onSubmit={this.handleSubmit}>
          <h3>Thêm người dùng</h3>
          <div className="form-group">
            <span>Tài khoản</span>
            <input
              className="form-control"
              name="taiKhoan"
              onChange={this.handleOnchange}
            />
          </div>
          <div className="form-group">
            <span>Mật khẩu</span>
            <input
              className="form-control"
              name="matKhau"
              onChange={this.handleOnchange}
            />
          </div>
          <div className="form-group">
            <span>Họ tên</span>
            <input
              className="form-control"
              name="hoTen"
              onChange={this.handleOnchange}
            />
          </div>
          <div className="form-group">
            <span>Email</span>
            <input
              className="form-control"
              name="email"
              onChange={this.handleOnchange}
            />
          </div>
          <div className="form-group">
            <span>Số điện thoại</span>
            <input
              className="form-control"
              name="soDt"
              onChange={this.handleOnchange}
            />
          </div>
          <div className="form-group">
            <span>Mã nhóm</span>
            <input
              className="form-control"
              name="maNhom"
              onChange={this.handleOnchange}
            />
          </div>
          <div className="form-group">
            <span>Mã loại người dùng</span>
            <input
              className="form-control"
              name="maLoaiNguoiDung"
              onChange={this.handleOnchange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success">
              Thêm người dùng
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAddUser: user => {
      dispatch(actFetchAddUser(user));
    }
  };
};

export default connect(null, mapDispatchToProps)(AddUser);
