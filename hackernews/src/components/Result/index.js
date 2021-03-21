import React from "react";
import "./result.css";
const Result = ({allData}) => {
  return (
    <div>
      <div className="result-Page">
        {allData.map((elem)=>{
          return <li>{elem}</li>
        })}
      </div>
    </div>
  );
};

export default Result;
