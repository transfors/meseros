import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Menu from './components/Menu';
import Mesas from './components/Mesas';
import {Ticket} from './components/Ticket';



const App = () => {
  return (

    <BrowserRouter>
      <Header />
        <Routes>        
          <Route path="/" element={<Mesas/>} /> 
          <Route path="/menu" element={<Menu />} />        
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
      <Footer />
    </BrowserRouter>
    
  );
};

export default App;


