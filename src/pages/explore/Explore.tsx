import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { Autocomplete, TextField, createFilterOptions } from "@mui/material";

import "./style.scss";

import useFetch from "../../hooks/useFetch";
import { getDataFromApi } from "../../services/api";
import Container from "../../components/Container/Container";
import MovieCard from "../../components/MovieCard/MovieCard";
import Loading from "../../components/Loading/Loading";
// import Spinner from "../../components/spinner/Spinner";

let filters = {};
const filter = createFilterOptions<FilmOptionType>();
interface FilmOptionType {
  value: string;
  label?: string;
  suggested?: boolean;
}

const sortByData: FilmOptionType[] = [
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

const Explore = () => {
  const [data, setData] = useState<any>(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState(null);
  const [value, setValue] = useState<FilmOptionType | null>(null);
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
    setValue(null);
    setGenre(null);
    fetchInitialData();
  }, [mediaType]);

  const onChange = (e: any, action: any) => {
    // if (action.name === "sortby") {
    //   setSortby(selectedItems);
    //   if (action.action !== "clear") {
    //     filters.sort_by = selectedItems.value;
    //   } else {
    //     delete filters.sort_by;
    //   }
    // }
    // if (action.name === "genres") {
    //   setGenre(selectedItems);
    //   if (action.action !== "clear") {
    //     let genreId = selectedItems.map((g: any) => g.id);
    //     genreId = JSON.stringify(genreId).slice(1, -1);
    //     filters.with_genres = genreId;
    //   } else {
    //     delete filters.with_genres;
    //   }
    // }
    // setPageNum(1);
    // fetchInitialData();
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
              sx={{ width: 300 }}
              options={sortByData}
              autoHighlight
              getOptionLabel={(option: any) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose a country"
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
