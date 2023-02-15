import React, { useState, useEffect } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import MenuIcon from "@mui/icons-material/Menu";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import DarkMode from "../DarkMode/DarkMode";
const NavMobile = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  const navigate = useNavigate();

  const navigationHandler = (type: string) => {
    if (type === "movie") {
      navigate("/explore/movie");
      setIsToggle(false);
    } else if (type === "/") {
      navigate("/");
      setIsToggle(false);
    } else {
      navigate("/explore/tv");
      setIsToggle(false);
    }
    // setMobileMenu(false);
  };

  const handleToggleClass = (e: any) => {
    setIsToggle((current) => !current);
  };

  console.log(theme);
  return (
    <>
      <div>
        <div className={`${theme} === 'light'` ? "header-mobile" : ""}>
          <button className="nav-btn open-btn" onClick={handleToggleClass}>
            <MenuIcon />
          </button>

          <button className="dark-mode">
            <DarkMode />
          </button>
        </div>

        <div className={!isToggle ? "nav nav-black" : "nav visible nav-black"}>
          <div className={!isToggle ? "nav nav-pink" : "nav visible nav-pink"}>
            <div
              className={!isToggle ? "nav nav-white" : "nav visible nav-white"}
            >
              <button className="nav-btn close-btn" onClick={handleToggleClass}>
                <CancelIcon />
              </button>
              <img
                src="https://cdnportal.mobalytics.gg/production/2020/07/yasuo-spirit-blossom-splash.jpg"
                alt="Logo"
                className="logo"
                onClick={() => navigationHandler("/")}
              />
              <ul className="list">
                <li
                  className="menu-item"
                  onClick={() => navigationHandler("movie")}
                >
                  <MovieFilterIcon />
                  Movies
                </li>
                <li
                  className="menu-item"
                  onClick={() => navigationHandler("tv")}
                >
                  <LiveTvIcon />
                  TV Shows
                </li>

                <li
                  className="menu-item"
                  onClick={() => navigationHandler("tv")}
                >
                  <LoginIcon />
                  Login
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMobile;
