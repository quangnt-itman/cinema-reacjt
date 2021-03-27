import React, { Component } from "react";
import { actFetchDetailMovie } from "./modules/action";
import { connect } from "react-redux";
import Loading from "./../../../components/Loading";

class DetailPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchDetailMovie(id);
    console.log(this.props);
  }

  renderTable = () => {
    const { detailMovie } = this.props;

    if (detailMovie.lichChieu && detailMovie.lichChieu.length > 0) {
      return detailMovie.lichChieu.map(item => {
        return (
          <tr key={item.maLichChieu}>
            <td>{item.thongTinRap.tenCumRap}</td>
            <td>{item.thongTinRap.tenRap}</td>
            <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
            <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
            <td>
              <button className="btn btn-success">Booking</button>
            </td>
          </tr>
        );
      });
    }
  };

  render() {
    const { detailMovie, loading } = this.props;
    if (loading) return <Loading />;
    return (
      <div className="container">
        <h3>DetailPage</h3>
        <div className="row">
          <div className="col-sm-6">
            <img src={detailMovie.hinhAnh} alt="" />
          </div>
          <div className="col-sm-6">
            <table className="table">
              <tbody>
                <tr>
                  <td>Ten Phim</td>
                  <td>{detailMovie.tenPhim}</td>
                </tr>
                <tr>
                  <td>Mo ta</td>
                  <td>{detailMovie.moTa}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Cum rap</th>
                  <th>Ten rap</th>
                  <th>Ngay chieu</th>
                  <th>Gio chieu</th>
                </tr>
              </thead>
              <tbody>{this.renderTable()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    detailMovie: state.detailMovieReducer.detailMovie,
    loading: state.detailMovieReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDetailMovie: id => {
      dispatch(actFetchDetailMovie(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
