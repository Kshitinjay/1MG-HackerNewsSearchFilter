import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div id="logo">
        <p>H</p>
      </div>
      <div id="search-bar">
        <input
          type="text"
          name="search-data"
          placeholder="Search stories by title, url or author"
        />
      </div>
      <div>
        <h1>Navbar</h1>
      </div>
    </div>
  );
};

export default Navbar;
