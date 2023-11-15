import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../images/1.jpg";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-wrap">
        <div className="header-left-wrap">
          <Link style={{ display: "flex", alignItems: "center" }} to="/">
            <img
              style={{ width: "154px", height: "20px" }}
              src={logoImage}
              alt="logo"
            />
          </Link>
          <ul>
            <li>
              <Link className="header-nav-item" to="/movies">
                Movies
              </Link>
            </li>
            <li>
              <Link className="header-nav-item" to="/tv">
                TV
              </Link>
            </li>
            <li>
              <Link className="header-nav-item" to="/person">
                인물
              </Link>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
}
