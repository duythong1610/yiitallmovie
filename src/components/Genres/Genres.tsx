import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

const Genres = ({ data }: any) => {
  const { genres } = useSelector((state: any) => state.home);

  return (
    <div className="genres">
      {data?.map((g: any) => {
        if (!genres[g]?.name) return;
        return (
          <div key={g} className="genre dark:!bg-pink-500 dark:text-white duration-500">
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
