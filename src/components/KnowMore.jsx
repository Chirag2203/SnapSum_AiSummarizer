// KnowMore.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const KnowMore = () => {
  return (
    <>
    < div className='flex flex-col items-center justify-center gap-5'>
    <span className='orange_gradient text-6xl font-black'>Snap Sum</span>
    
    {/* <span className='blue_gradient text-4xl font-black'>What is Snap Sum?</span> */}
    <p className='text-2xl w-3/4 flex '>Snap Sum is a free tool that summarizes articles and Web pages for you. Save time and get the gist!</p>
       
    <Link to = "/"><button class="cssbuttons-io-button mt-16 mb-32 px-12 flex">
        <p className='mr-3'>Home</p> 
      <div class="icon">
        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
      </div>
    </button></Link>
      
    

    </div>
    
    </>
  );
};

export default KnowMore;
