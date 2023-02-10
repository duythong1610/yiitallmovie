import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./style.scss";

const Header: React.FC = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const navigationHandler = (type: string) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    // setMobileMenu(false);
  };

  const searchQueryHandler = (event: any): void => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      // setTimeout(() => {
      //   setShowSearch(false);
      // }, 1000);
    }
  };
  return (
    <>
      <div className="header">
        <div className="header-menu">
          <ul className="menu-items">
            <li className="menu-item" onClick={() => navigate("/")}>
              Home
            </li>
            <li
              className="menu-item"
              onClick={() => navigationHandler("movie")}
            >
              Movies
            </li>
            <li className="menu-item" onClick={() => navigationHandler("tv")}>
              TV Shows
            </li>
          </ul>

          <div className="menu-feature">
            <input
              className="search"
              type="text"
              placeholder="Search for a movie or tv show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button className="menu-button">Đăng nhập</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
