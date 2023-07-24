import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeSwitch from './DarkModeSwitch';

const Nav = () => {
  return (
    <div className='flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center w-full mb-10 pt-3'>
      <Link to="/" className='flex justify-center items-center md:items-start'>
        <img src='./SnapSum-logog.png' className='w-10 object-contain' />
        <span className="mx-5 font-bold text-2xl font-satoshi brand">SnapSum</span>
      </Link>
      <div className='flex gap-2 mt-4 md:mt-0'>
        <Link to="/" className="learn-more lm-btn">
          <div className='flex items-center'>
            <span className="circle outer-circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Home</span>
          </div>
        </Link>
        <Link to="/knowmore" className="learn-more lm-btn">
          <div className='flex items-center'>
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Learn More</span>
          </div>
        </Link>
        <DarkModeSwitch />
      </div>
    </div>
  );
};

export default Nav;
