import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

import Container from "../../../components/Container/Container";

import { Cast as CastTypes } from "../../../shared/types";
import { RootState } from "../../../store";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface TypeProps {
  data: CastTypes[];
  loading: any;
}

const Cast = ({ data, loading }: TypeProps) => {
  const { url }: any = useSelector((state: RootState) => state.home);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="castSection">
      <Container>
        <div className="sectionHeading">Top Cast</div>
        {!loading ? (
          <div className="listItems">
            {data?.map((item: any) => {
              let imgUrl = item.profile_path
                ? url.profile + item.profile_path
                : null;
              return (
                <div key={item.id} className="listItem">
                  <div className="profileImg">
                    <LazyLoadImage src={imgUrl} />
                  </div>
                  <div className="name">{item.name}</div>
                  <div className="character">{item.character}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cast;
