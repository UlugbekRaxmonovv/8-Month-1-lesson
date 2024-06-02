import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Wishlist from './pages/Wishlist/Wishlist';
import Card from './pages/Card/Card';
import  Navbar from './componets/Navbar/Navbar'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
