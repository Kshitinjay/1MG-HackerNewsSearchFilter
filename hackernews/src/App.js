import React,{useState,useEffect} from "react";
import './App.css';
import Navbar from "./components/Navbar/";
import Filter from "./components/Filter/";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Filter/>
      <h1>App component</h1>
    </div>
  );
}

export default App;
