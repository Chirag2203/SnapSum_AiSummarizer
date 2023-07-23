import Hero from "./components/Hero";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import KnowMore from "./components/KnowMore";
import React from 'react';
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css";

const App = () => {
  return (
    <Router>
      <main>
        <div className='main'>
          <div className='gradient' />
        </div>

        <div className='app'>
          <Nav  />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/knowmore" element={<KnowMore />} />
            <Route path="/demo" element={<Demo />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </Router>
  );
};

export default App;
