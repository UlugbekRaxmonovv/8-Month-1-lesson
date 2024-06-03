import React from 'react';
import './App.css'
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Wishlist from './pages/Wishlist/Wishlist';
import Card from './pages/Card/Card';
import  Navbar from './componets/Navbar/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <ToastContainer/>
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
