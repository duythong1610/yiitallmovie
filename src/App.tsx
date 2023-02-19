import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { RootState, store } from "../src/store";
import { Provider } from "react-redux";
import Home from "./pages/home/Home";
// import { MovieWatch } from "./components/Movies/MovieWatch";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import SearchResult from "./pages/searchResult/SearchResult";
import NotFound from "./pages/404/NotFound";
import { getDataFromApi } from "./services/api";
import React, { useEffect } from "react";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import { MovieWatch } from "./components/Modal/Movies/MovieWatch";
import NavMobile from "./components/NavMobile/NavMobile";
import Footer from "./components/Footer/Footer";

function App() {
  const { url } = useSelector((state: RootState) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    getDataFromApi("/configuration").then((res) => {
      console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises: any = [];
    let endPoints = ["tv", "movie"];
    let allGenres: any = {};

    endPoints.forEach((url) => {
      promises.push(getDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    console.log(data);
    data.map(({ genres }) => {
      return genres.map((item: any) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };
  return (
    <React.Fragment>
      <div
        className="background dark:text-black dark:bg-white duration-500
      "
      >
        <Header />
        <Routes>
          <Route path="/nav" element={<NavMobile />} />
          <Route index element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/:mediaType/:id/watch" element={<MovieWatch />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
