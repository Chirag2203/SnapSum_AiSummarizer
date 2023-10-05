import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from "framer-motion"; // Import Framer Motion

import Hero from "./components/Hero";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import KnowMore from "./components/KnowMore";
import Nav from "./components/Nav";
import Localsummary from './components/Localsummary';
import "./App.css";
import { ThemeProvider } from './components/ThemeContext';
import Profile from './components/Profile';
import Pricing from './components/Pricing';

import { Auth0Provider } from '@auth0/auth0-react';
import Contact from './components/Contact';
import Payment from './components/Payment';
import Policy from './components/Policy';
const App = () => {
  return (
    <ThemeProvider>
    <Router>
      <main>
        <div className='main'>
          <div className='gradient' />
        </div>

          <Nav  />  
        <div className='app'>
          
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<KnowMore />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/localsummary" element={<Localsummary />} />
              <Route path='/Profile' element={<Profile/>} />
              <Route path="/Pricing" element = { <Pricing/>}/>
              <Route path="/Contact" element ={<Contact/>} />
              <Route path='/Payment' element={<Payment />} />
              <Route path="/Policy" element={<Policy  />} />
              <Route path="*" element={<h1 className='blue_gradient text-3xl h-screen pt-12'>PAGE DOES NOT EXISTS</h1>} />
            </Routes>
          <Footer />
        </div>
      </main>
    </Router>
    </ThemeProvider>
  );
};

export default App;
