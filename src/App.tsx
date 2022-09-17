import React from "react";
import "./App.css";
import { Banner } from "./components/banner/Banner";
import { NavBar } from "./components/nav/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
