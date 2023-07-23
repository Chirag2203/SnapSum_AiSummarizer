import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  //NOT WORKING YET

  // const loadScript = (url, callback) => {
  //   const script = document.createElement('script');
  //   script.type = 'text/javascript';
  //   script.src = url;
  //   script.async = true;
  //   script.onload = callback;
  //   document.body.appendChild(script);
  // };
  // const translatorRef = useRef();


  // useEffect(() => {
  //   const initGoogleTranslate = () => {
  //     if (window.google.translate.TranslateElement) {
  //       new window.google.translate.TranslateElement({ pageLanguage: 'en', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE }, translatorRef.current);
  //     } else {
  //       // Retry initialization after a short delay if the TranslateElement is not available yet
  //       setTimeout(initGoogleTranslate, 100);
  //     }
  //   };

  //   // Load the Google Translate script using the custom loader function
  //   loadScript('https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit', initGoogleTranslate);

  //   // return () => {
  //   //   // Clean up the script when the component unmounts
  //     // document.body.removeChild(translatorRef.current);
  //   // };
  // }, []);


  return (
    <div className='flex justify-between items-center w-full mb-10 pt-3'>
      <Link to="/" className='flex justify-center items-center'>
        <img src='./SnapSum-logog.png' className='w-10 object-contain' />
        <span className="mx-5 font-bold text-2xl font-satoshi">SnapSum</span>
      </Link>
      {/* <div className='flex w-12' ref={translatorRef} > </div> */}
      <Link to="/knowmore" className="learn-more lm-btn">
        <div className='flex items-center '>
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Learn More</span>
        </div>
      </Link>
    </div>
  );
};

export default Nav;
