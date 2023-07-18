import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <Link to = "/" className='flex justify-center items-center'> <img src='/src/assets/SnapSum-logog.png' className='w-10 object-contain' />
        <span className="mx-5 font-bold text-2xl font-satoshi">SnapSum</span></Link>

      <Link to="/knowmore" className="learn-more lm-btn">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">Learn More</span>
      </Link>
    </nav>
  );
};

export default Nav;
