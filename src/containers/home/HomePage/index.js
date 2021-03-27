import React, { useEffect } from "react";
import Movie from "./../../../components/Movie";
import { actFetchListMovie } from "./../../../redux/action";
import { connect } from "react-redux";

function HomePage(props) {
  useEffect(() => {
    props.fetchListMovie();
  }, []);

  const renderListMovie = () => {
    const { listMovie } = props;
    if (listMovie && listMovie.length > 0) {
      return listMovie.map(movie => {
        return <Movie key={movie.maPhim} movie={movie} />;
      });
    }
  };

  return (
    <div className="container">
      <div className="row">{renderListMovie()}</div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    listMovie: state.movieReducer.listMovie
  };
};

const mapDispatchToProps = disptach => {
  return {
    fetchListMovie: () => {
      disptach(actFetchListMovie());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
