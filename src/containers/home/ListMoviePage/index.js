import React, { Component } from "react";
import Movie from "./../../../components/Movie";
import { actFetchListMovie } from "./../../../redux/action";
import { connect } from "react-redux";

class ListMoviePage extends Component {
  componentDidMount() {
    this.props.fetchListMovie();
  }

  renderListMovie = () => {
    const { listMovie } = this.props;
    if (listMovie && listMovie.length > 0) {
      return listMovie.map(movie => {
        return <Movie key={movie.maPhim} movie={movie} />;
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderListMovie()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listMovie: state.movieReducer.listMovie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListMovie: () => {
      dispatch(actFetchListMovie());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
