import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './pages/Header';
import Menu from './components/Menu';
import Mesas from './pages/Mesas';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/mesas" element={<Mesas />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


