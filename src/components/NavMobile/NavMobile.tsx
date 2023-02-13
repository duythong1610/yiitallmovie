import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import MenuIcon from "@mui/icons-material/Menu";
import "./style.scss";
import { useNavigate } from "react-router-dom";
const NavMobile = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const navigationHandler = (type: string) => {
    if (type === "movie") {
      navigate("/explore/movie");
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
  return (
    <>
      <div>
        <button className="nav-btn open-btn" onClick={handleToggleClass}>
          <MenuIcon />
        </button>

        <div className={!isToggle ? "nav nav-black" : "nav visible nav-black"}>
          <div className={!isToggle ? "nav nav-red" : "nav visible nav-red"}>
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
              />
              <ul className="list">
                <li className="menu-item" onClick={() => navigate("/")}>
                  Home
                </li>
                <li
                  className="menu-item"
                  onClick={() => navigationHandler("movie")}
                >
                  Movies
                </li>
                <li
                  className="menu-item"
                  onClick={() => navigationHandler("tv")}
                >
                  TV Shows
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
