import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import { NavBar } from 'components/nav/NavBar';
import { Home } from 'views/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/bdigital.vn" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
