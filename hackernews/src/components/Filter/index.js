import React from "react";
import "./filter.css";
const Filter = ({search,by,tim,handleSearchOption,handleByOption,handleTimeOption}) => {
  return (
    <div className="filter-container">
      <span>Search</span>
      <select value={search} onChange={(e)=> handleSearchOption(e)}>
        <option value="all">All</option>
        <option value="story">Stories</option>
        <option value="comment">Comments</option>
      </select>
      <span>by</span>
      <select value={by} onChange={(e)=> handleByOption(e)}>
        <option value="popularity">Popularity</option>
        <option value="date">Date</option>
      </select>
      <span>for</span>
      <select value={tim} onChange={(e)=> handleTimeOption(e)}>
        <option value="allTime">All time</option>
        <option value="24hr">Last 24h</option>
        <option value="week">Past Week</option>
        <option value="month">Past Month</option>
        <option value="year">Past Year</option>
        <option value="range">Custom Range</option>
      </select>
    </div>
  );
};

export default Filter;
