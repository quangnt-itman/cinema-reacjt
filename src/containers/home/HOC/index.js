import React, { Component } from "react";
import NguoiDung from "./NguoiDung";
// import SanPham from "./SanPham";
import WithModal from "./WithModal";

let FormModal = WithModal(NguoiDung);

export default class HOC extends Component {
  render() {
    return (
      <div>
        <h3 className="title">HOC</h3>
        {/* <NguoiDung /> */}
        {/* <SanPham /> */}
        <FormModal />
      </div>
    );
  }
}
