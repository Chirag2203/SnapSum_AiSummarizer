import React from "react";
import {Link} from 'react-router-dom';
import {motion} from "framer-motion";
import { slideRightAnimation } from "./animation";


const Hero = () => {
  return (
    <motion.div {...slideRightAnimation} className="flex flex-col items-center h-auto min-h-screen">
    
    <header className='w-full flex justify-center items-center flex-col '>

      <h1 className='head_text'>
        Summarize and Share <br className='max-md:hidden' />
        <span className='orange_gradient '> <br className="sm:hidden" /> Articles Using AI</span>
      </h1>
      <h2 className='desc '>
        SnapSum is a free tool that summarizes articles, Web pages for you and allows you to share them with your friends and colleagues.
        <br className='max-md:hidden' />
        <span className='blue_gradient'> <br className="sm:hidden"/>Save time and get the gist!</span>
        
      </h2>
    </header>
    <div className="flex gap-5 mt-16 flex-col md:flex-row">
    <Link to = "/Demo">
      <button class="cssbuttons-io-button "> Web Summarizer
      <div className="icon2">
        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
      </div>
    </button>
    </Link>
    <Link to = "/Localsummary">
      <button class="cssbuttons-io-button "> Text Summarizer
      <div className="icon2">
        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
      </div>
    </button>
    </Link>
    </div>

    </motion.div>
  );
};

export default Hero;
