import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../Container/Container";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./style.scss";
import NavMobile from "../NavMobile/NavMobile";


import DarkMode from "../DarkMode/DarkMode";

const Header: React.FC = () => {
  const [query, setQuery] = useState("");

  const [windowWidthSize, setWindowWidthSize] = useState(window.innerWidth);
  const navigate = useNavigate();

  const navigationHandler = (type: string) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    // setMobileMenu(false);
  };

  const handleSearch = (event: any) => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const searchQueryHandler = (event: any): void => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      // setTimeout(() => {
      //   setShowSearch(false);
      // }, 1000);
    }
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidthSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidthSize]);

  console.log(windowWidthSize);
  return (
    <>
      {windowWidthSize >= 768 ? (
        <div className="header">
          <Container>
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
                <li
                  className="menu-item"
                  onClick={() => navigationHandler("tv")}
                >
                  TV Shows
                </li>
              </ul>

              <div className="menu-feature">
                <div className="form">
                  <SearchOutlinedIcon
                    className="search-icon"
                    onClick={handleSearch}
                  />
                  <input
                    className="search"
                    type="text"
                    placeholder="Search...."
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyUp={searchQueryHandler}
                  />
                </div>
                <DarkMode />
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <NavMobile />
      )}
    </>
  );
};

export default Header;
