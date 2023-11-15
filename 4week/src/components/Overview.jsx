import React from "react";
import * as a from "../Movie/MovieStyles.jsx";
export default function Overview({ overview }) {
  return (
    <a.MovieInfo>
      <h3>{overview}</h3>
    </a.MovieInfo>
  );
}
