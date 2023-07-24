import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInAnimation, slideLeftAnimation } from './animation';
import axios from 'axios';

const KnowMore = () => {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    const options = {
      method: 'GET',
      url: 'https://jokeapi-v2.p.rapidapi.com/joke/Any',
      params: {
        format: 'json',
        idRange: '0-250',
        blacklistFlags: 'nsfw,racist',
      },
      headers: {
        'X-RapidAPI-Key': '6d90c4ceefmsh2a38b0206a4488ep141773jsn534665224174',
        'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      if (response.data.type === 'single') {
        setJoke(response.data.joke);
      } else if (response.data.type === 'twopart') {
        setJoke(`${response.data.setup}\n${response.data.delivery}`);
      } else {
        setJoke('Humor died :( Come when he reborns');
        console.log(error);
      }
    } catch (error) {
      console.error(error);
    }
  };


  

  const [number, setNumber] = useState('');
  const [fact, setFact] = useState('');

  const fetchFact = async () => {
    if (!number) {
      alert('Please enter a number!');
      return;
    }

    const options = {
      method: 'GET',
      url: `https://numbersapi.p.rapidapi.com/${number}/math`,
      params: {
        fragment: 'true',
        json: 'true',
      },
      headers: {
        'X-RapidAPI-Key': '6d90c4ceefmsh2a38b0206a4488ep141773jsn534665224174',
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setFact(response.data.text);
    } catch (error) {
      console.error(error);
      setFact('Failed to fetch the fact. Please try again later.');
    }
  };

  return (
    <motion.div {...slideLeftAnimation} className='h-screen m-16'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <span className='orange_gradient text-6xl font-black'>Snap Sum</span>

        {/* <span className='blue_gradient text-4xl font-black'>What is Snap Sum?</span> */}
        <p className='text-2xl w-3/4 flex text-center brand '>
          Snap Sum is a free tool that summarizes articles and Web pages for you. Save time and get the gist! This app
          is built using React and RapidAPI
        </p>

        <Link to='/'>
          <button className='cssbuttons-io-button mt-16 mb-16 px-12 flex'>
            <p className='mr-3'>Home</p>
            <div className='icon2'>
              <svg height='24' width='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M0 0h24v24H0z' fill='none'></path>
                <path
                  d='M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z'
                  fill='currentColor'
                ></path>
              </svg>
            </div>
          </button>
        </Link>
        <div className='flex md:flex-row flex-col gap-3 items-start  justify-center'>
        <motion.div className='summary_box flex items-center justify-center flex-col w-auto md:w-96'{...fadeInAnimation}>
          <button className='joke-btn' onClick={fetchJoke}>
           
            Bored?
          </button>
          <div id='joke-here ' className='mt-3 text-center text-indigo-900 '>{joke}</div>
        </motion.div>
        <motion.div className='summary_box flex items-center gap-3 justify-center flex-col w-auto md:w-96 mb-3' {...fadeInAnimation}>
          <button className='joke-btn' onClick={fetchFact}>
           EXTREMe Bored ?
          </button>
          <span className='text-center'>Enter a number to get a fact about it</span>
          <input
            type='number'
            value={number}
            className='rounded-lg text-center'
            onChange={(e) => setNumber(e.target.value)}
          />
          <div id='fact-here ' className='mt-3 text-center text-indigo-900 p-2 rounded-lg'>
            {fact }
          </div>
        </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default KnowMore;
