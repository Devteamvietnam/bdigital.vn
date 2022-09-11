import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { UIPages } from '../pages';
import { UIShowreel } from '../pages/showreel';
import { UIContact } from '../pages/contact';

function AppRouter() {
  let router = (
    <Router>
      <Routes>
        <Route path='/bdigital.vn' element={<UIPages />} />
        <Route path='/bdigital.vn/showreel' element={<UIShowreel />} />
        <Route path='/bdigital.vn/contact' element={<UIContact />} />
      </Routes>
    </Router>
  );
  return router;
}

export default AppRouter;
