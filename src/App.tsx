import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/nav/NavBar";
import { Contact } from "./views/Contact";
import { Home } from "./views/Home";
import { PageNotFound } from "./views/PageNotFound";
import { Showreel } from "./views/Showreel";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/bdigital.vn" element={<Home />} />
          <Route path="/bdigital.vn/showreel" element={<Showreel />} />
          <Route path="/bdigital.vn/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
