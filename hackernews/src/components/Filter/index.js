import React from "react";
import "./filter.css";
const Filter = () => {
  return (
    <div className="filter-container">
      <span>Search</span>
      <select>
        <option value="all">All</option>
        <option value="stories">Stories</option>
        <option value="comments">Comments</option>
      </select>
      <span>by</span>
      <select>
        <option value="popularity">Popularity</option>
        <option value="date">Date</option>
      </select>
      <span>for</span>
      <select>
        <option value="">All time</option>
        <option value="">Last 24h</option>
        <option value="">Past Week</option>
        <option value="">Past Month</option>
        <option value="">Past Year</option>
        <option value="">Custom Range</option>
      </select>
    </div>
  );
};

export default Filter;
