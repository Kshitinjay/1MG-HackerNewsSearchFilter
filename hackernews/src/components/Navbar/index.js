import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div id="logo-container">
        <div id="logo">
          <p>H</p>
        </div>
        <span>Search Hacker news</span>
      </div>
      <div id="search-bar">
        <input
          type="text"
          name="search-data"
          placeholder="Search stories by title, url or author"
        />
      </div>
      <div>
        <p>Settings</p>
      </div>
    </div>
  );
};

export default Navbar;
