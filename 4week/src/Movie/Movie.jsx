import React, { useState } from "react";
import Overview from "../components/Overview";
import * as a from './MovieStyles.jsx';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({ title, poster_path, vote_average, overview }) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  const shortOverview = overview.length > 180 ? overview.slice(0, 180) + '...' : overview;

  return (
    <a.MovieContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isMouseOver={isMouseOver}
    >
      <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />

      {isMouseOver && <Overview overview={shortOverview} />}
      
      <a.MovieInfo>
        <h3>{title}</h3>
        <span>{vote_average}</span>
      </a.MovieInfo>
    </a.MovieContainer>
  );
}
