import React, { useState, useEffect } from "react";
import Movie from "./../../../components/Movie";
import Axios from "axios";

export default function AboutPage() {
  // const [listMovie, setListMovie] = useState([]);
  // const [status, setStatus] = useState(true);
  // const [number, setNumber] = useState(0);

  const [state, setState] = useState({
    listMovie: [],
    status: true,
    number: 0
  });

  useEffect(() => {
    Axios({
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03",
      method: "GET"
    })
      .then(result => {
        setState({
          ...state,
          listMovie: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const renderListMovie = () => {
    const { listMovie } = state;
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
