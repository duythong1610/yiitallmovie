import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-menu">
          <div className="menu-item">
            <Link to={"/"}>Trang chủ</Link>
            <Link to={"/movie"}>Phim</Link>
            <Link to={"/tv"}>TV Shows</Link>
          </div>
          <div className="menu-feature">
            <button className="menu-button">
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
