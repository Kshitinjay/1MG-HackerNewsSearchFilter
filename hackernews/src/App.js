import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/";
import Filter from "./components/Filter/";
function App() {
  const [posts, setPosts] = useState([]);
  const [inp, setInp] = useState("");
  const [search, setSearch] = useState();
  const [by, setBy] = useState();
  const [tim, setTim] = useState();

  useEffect(() => {
    fetch(
      `https://hn.algolia.com/api/v1/search?hitsPerPage=100&query=${inp}&tags=(job,story,comment,poll)`
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.hits);
        data.hits.hitsPerPage = 100;
      })
      .catch((error) => console.log(error));
  }, [inp, search, by, tim]);

  const handleInput = (e) => {
    setInp(e.target.value);
  };

  const handleSearchOption = (e) => {
    setSearch(e.target.value);
  };
  const handleByOption = (e) => {
    setBy(e.target.value);
  };
  const handleTimeOption = (e) => {
    setTim(e.target.value);
  };

  // console.log(Data[0].title);
  // console.log(posts);
  return (
    <div className="App">
      <Navbar handleInput={handleInput} />
      <Filter
        search={search}
        by={by}
        tim={tim}
        handleSearchOption={handleSearchOption}
        handleByOption={handleByOption}
        handleTimeOption={handleTimeOption}
      />
      {posts.map((elem, id) => (
        <div key={id} className="result-container">
          <div className="post">
            <p>
              {elem.title}{" "}
              <span>
                <a href={elem.url}>({elem.url})</a>
              </span>
            </p>
            <p id="info">
              <span id="points">{elem.points} points </span>|{" "}
              <span id="author">{elem.author} </span>|{" "}
              <span id="tim">
                {2021 - elem.created_at.slice(0, 4)} years ago
              </span>{" "}
              | <span id="comments">{elem.num_comments} comments</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
