import React from "react";
import {Link} from 'react-router-dom';
import Nav from "./Nav";


const Hero = () => {
  return (
    <>
    <header className='w-full flex justify-center items-center flex-col '>
      <Nav/>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>Snap Sum Using AI</span>
      </h1>
      <h2 className='desc'>
        SnapSum is a free tool that summarizes articles and Web pages for you.
        <br className='max-md:hidden' />
        <span className='blue_gradient'>Save time and get the gist!</span>
        
      </h2>
    </header>
    <Link to = "/Demo"><button class="cssbuttons-io-button mt-16 mb-64"> Get started
      <div class="icon">
        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
      </div>
    </button></Link>
    </>
  );
};

export default Hero;
