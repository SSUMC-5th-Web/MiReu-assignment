import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { IMG_BASE_URL } from "../components/Movie";

export default function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();

  return (
    <div className="page-container">
      <div style={{ display: "flex" }}>
        <img
          style={{ width: "300px", height: "450px", marginRight: "20px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", marginLeft: "600px"}}
          src={IMG_BASE_URL + state.poster_path}
          alt="영화 포스터 이미지"
        />
        <div>
          <div style={{ fontSize: "32px", marginTop: "200px"}}>{title}</div>
        </div>
      </div>
    </div>
  );
}
