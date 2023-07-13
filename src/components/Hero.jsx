import React from "react";


const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <div className="flex justify-center items-center">
        <img src='/src/assets/SnapSum-logog.png' className='w-10 object-contain ' />
        <span className="mx-5 font-bold text-2xl font-satoshi">SnapSum</span>
        </div>

        
        <button class="learn-more lm-btn">
          <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
          </span>
          <span class="button-text">Learn More</span>
        </button>
      </nav>

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
  );
};

export default Hero;
