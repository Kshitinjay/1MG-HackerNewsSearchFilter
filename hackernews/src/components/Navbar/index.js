import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div id="logo-container">
        <div id="logo">
          <p>H</p>
        </div>
        <span id="logo-text1">
          Search Hacker
          <br />
          news
        </span>
      </div>
      <div id="search-bar">
        <input
          type="text"
          name="search-data"
          placeholder="Search stories by title, url or author"
        />
      </div>
      <div id="logo-container">
        <div>
          <img src="https://img.icons8.com/metro/26/000000/settings.png" />
        </div>
        <div>
          <span id="logo-text">Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
