import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { Autocomplete, TextField, createFilterOptions } from "@mui/material";

import "./style.scss";

import useFetch from "../../hooks/useFetch";
import { getDataFromApi } from "../../services/api";
import Container from "../../components/container/Container";
import MovieCard from "../../components/moviecard/MovieCard";
import Loading from "../../components/loading/Loading";
// import Spinner from "../../components/spinner/Spinner";

// const filter = createFilterOptions<>();

const sortByData: any = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  {
    value: "primary_release_date.desc",
    label: "Release Date Descending",
  },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "original_title.asc", label: "Title (A-Z)" },
];

interface IFilter {
  sort_by: string;
  with_genres: string;
}
let filters: IFilter | any = {
  sort_by: "",
  with_genres: "",
};

const Explore = () => {
  const [data, setData] = useState<any>(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState<any>();
  const [option, setOption] = useState<any>(null);

  const { mediaType }: any = useParams();

  const { data: genresData }: any = useFetch(`/genre/${mediaType}/list`);

  const fetchInitialData = () => {
    setLoading(true);
    getDataFromApi(`/discover/${mediaType}`, filters).then((res) => {
      setData(res);
      setPageNum((prev) => prev);
      setLoading(false);
    });
  };

  const genreRender = genresData?.genres;
  console.log(genreRender);
  // console.log(genre);

  const fetchNextPageData = () => {
    getDataFromApi(`/discover/${mediaType}?page=${pageNum}`, filters).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setPageNum((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    filters = {};
    setData(null);
    setPageNum(1);
    // setValue(null);
    setGenre(null);
    fetchInitialData();
  }, [mediaType]);

  const onChangeSortBy = (e: any, selectedItems: any) => {
    setOption(selectedItems);
    filters.sort_by = selectedItems.value;
    setPageNum(1);
    fetchInitialData();
  };

  const onChangeGenres = (e: any, selectedItems: any) => {
    setGenre(selectedItems);
    let genreId = selectedItems.map((g: any) => g.id);
    genreId = JSON.stringify(genreId).slice(1, -1);
    filters.with_genres = genreId;
    setPageNum(1);
    fetchInitialData();
  };

  return (
    <div className="explorePage">
      <Container>
        <div className="pageHeader">
          <div className="pageTitle dark:!text-black">
            {mediaType === "tv" ? "Explore TV Shows" : "Explore Movies"}
          </div>
          <div className="filters">
            {/* <Select
              name="genres"
              value={genre}
              options={genresData?.genres}
              getOptionLabel={(option: any) => option.name}
              getOptionValue={(option: any) => option.id}
              onChange={onChange}
              placeholder="Select genres"
              className="react-select-container genresDD"
              classNamePrefix="react-select"
  /> */}
            <Autocomplete
              className="dark:text-red-900"
              sx={{ width: 300 }}
              options={sortByData}
              value={option}
              getOptionLabel={(option) => option.label as string}
              onChange={onChangeSortBy}
              renderInput={(params) => (
                <TextField
                  className="dark:!text-white !text-red-800"
                  {...params}
                  label="Sort by"
                  inputProps={{
                    ...params.inputProps,
                  }}
                />
              )}
            />

            <Autocomplete
              multiple
              sx={{ width: 300, maxHeight: 50 }}
              options={genreRender || ""}
              value={genre}
              onChange={onChangeGenres}
              getOptionLabel={(option) => option.name as string}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose a genres"
                  inputProps={{
                    ...params.inputProps,
                  }}
                />
              )}
            />
          </div>
        </div>
        {loading && <Loading />}
        {!loading && (
          <>
            {data?.results?.length > 0 ? (
              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={<Loading />}
              >
                {data?.results?.map((item: any, index: number) => {
                  if (item.media_type === "person") return;
                  return (
                    <MovieCard
                      key={index}
                      data={item}
                      mediaType={mediaType}
                      fromSearch={true}
                    />
                  );
                })}
              </InfiniteScroll>
            ) : (
              <span className="resultNotFound">Sorry, Results not found!</span>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default Explore;
