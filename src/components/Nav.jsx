import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeSwitch from './DarkModeSwitch';
import logo from '../assets/SnapSum-logog.png';
import applogo from '../assets/application.png';

const Nav = () => {
  return (
    <div className='flex  items-center flex-row justify-between w-full md:mb-10 pt-3 mt-1 sm:mt-5 p-0'>
      <Link to="/" className='flex justify-center items-center md:items-start '>
        <img src={logo} className='w-10 object-contain' />
        <span className=" mx-2 sm:mx-5 font-bold  text-lg sm:text-2xl font-satoshi brand">SnapSum</span>
      </Link>
      <div className='flex sm:gap-2  gap-1 items-center justify-between sm:mt-0 flex-row ' >
        <Link to="/" className="learn-more lm-btn hidden sm:block">
          <button className='nav-btn'>Home</button>
        </Link>
        <Link to="/about" className="learn-more lm-btn">
          <button className='nav-btn hidden sm:block'>About us</button>
          <img src= {applogo} alt="" className='w-10 h-10 sm:hidden block  ' />
        </Link>
      <DarkModeSwitch />
      </div>
    </div>
  );
};

export default Nav;
