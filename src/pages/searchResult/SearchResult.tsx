import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import "./style.scss";

import { getDataFromApi } from "../../services/api";
import Container from "../../components/container/Container";
import MovieCard from "../../components/moviecard/MovieCard";
import { ItemsPage, Item } from "../../shared/types";

const SearchResult = () => {
  const [data, setData] = useState<any>([]);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    getDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((prev) => prev);
        setLoading(false);
      }
    );
  };

  const fetchNextPageData = () => {
    getDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
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
    setPageNum(1);
    fetchInitialData();
  }, [query]);

  const dataLength: number = data?.results?.length;
  return (
    <div className="searchResultsPage">
      {loading && "abc"}
      {!loading && (
        <Container>
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Search ${
                  data?.total_results > 1 ? "results" : "result"
                } of '${query}'`}
              </div>

              <InfiniteScroll
                className="content"
                dataLength={dataLength}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={0}
              >
                {data?.results.map((item: any, index: any) => {
                  if (item.media_type === "person") return;
                  return (
                    <MovieCard
                      key={index}
                      data={item}
                      fromSearch={true}
                      mediaType={item.media_type}
                    />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="resultNotFound">Sorry, Results not found!</span>
          )}
        </Container>
      )}
    </div>
  );
};

export default SearchResult;
