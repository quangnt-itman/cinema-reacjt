import React, { useState } from "react";

export default function AddMovie() {
  const [state, setState] = useState({
    values: {
      tenPhim: "",
      biDanh: "",
      trailer: "",
      hinhAnh: "",
      moTa: "",
      maNhom: "GP01",
      ngayKhoiChieu: "",
      danhGia: 0,
    },
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setState({
      values: { ...state.values, [name]: value },
    });
    if (e.target.files && e.target.files[0]) {
      setState({
        values: { ...state.values, hinhAnh: e.target.files[0] },
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <h3>Thêm phim</h3>
        <div className="form-group">
          <span>Tên phim</span>
          <input
            className="form-control"
            name="tenPhim"
            onChange={handleOnchange}
          />
        </div>
        <div className="form-group">
          <span>Bí danh</span>
          <input
            className="form-control"
            name="biDanh"
            onChange={handleOnchange}
          />
        </div>
        <div className="form-group">
          <span>Trailer</span>
          <input
            className="form-control"
            name="trailer"
            onChange={handleOnchange}
          />
        </div>
        <div className="form-group">
          <span>Hình ảnh</span>
          <input name="hinhAnh" type="file" onChange={handleOnchange} />
        </div>
        <div className="form-group">
          <span>Mô tả</span>
          <input
            className="form-control"
            name="moTa"
            onChange={handleOnchange}
          />
        </div>
        <div className="form-group">
          <span>Ngày chiếu</span>
          <input
            className="form-control"
            name="ngayKhoiChieu"
            type="date"
            onChange={handleOnchange}
          />
        </div>
        <div className="form-group">
          <span>Đánh giá</span>
          <input
            className="form-control"
            name="danhGia"
            onChange={handleOnchange}
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
