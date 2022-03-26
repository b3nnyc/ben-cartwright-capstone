//Modules
import './App.scss';
import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

//Components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

//Pages
import Home from './pages/Home/Home';

export default function App() {
  return (
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
  );
}

