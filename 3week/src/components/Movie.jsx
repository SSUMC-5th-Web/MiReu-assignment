import React, { useState } from "react";
import Overview from "./Overview.jsx";

const ING_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({ title, poster_path, vote_average, overview }) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <div
      className={`movie-container ${isMouseOver ? "show-overview" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={ING_BASE_URL + poster_path} alt="영화포스터" />

      {isMouseOver && <Overview overview={overview} />}
      <div className="movie-info">
        <h3>{title}</h3>
        <span>{vote_average}</span>
      </div>
    </div>
  );
}


