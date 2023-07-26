import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeSwitch from './DarkModeSwitch';
import logo from '../assets/SnapSum-logog.png';

const Nav = () => {
  return (
    <div className='flex flex-col items-center sm:flex-row justify-between md:items-center w-full md:mb-10 pt-3 mt-1 sm:mt-5 p-0'>
      <Link to="/" className='flex justify-center items-center md:items-start '>
        <img src={logo} className='w-10 object-contain' />
        <span className="mx-5 font-bold text-2xl font-satoshi brand">SnapSum</span>
      </Link>
      <div className='flex sm:gap-2  gap-1 items-center mt-3 sm:mt-0 flex-row ' >
        <Link to="/" className="learn-more lm-btn hidden sm:block">
          <button className='nav-btn'>Home</button>
        </Link>
        <Link to="/about" className="learn-more lm-btn">
          <button className='nav-btn'>About us</button>
        </Link>
      <DarkModeSwitch />
      </div>
    </div>
  );
};

export default Nav;
