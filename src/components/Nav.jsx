import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeSwitch from '../Buttons/DarkModeSwitch';
import logo from '../assets/SnapSum-logog.png';
import applogo from '../assets/application.png';
import Wavebtn from '../Buttons/Wavebtn';
import Loginbtn from '../Buttons/Loginbtn';
import Logoutbtn from '../Buttons/Logoutbtn';
import { useAuth0 } from '@auth0/auth0-react';
import { loader } from '../assets';
const Nav = () => {

  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { isLoading, error } = useAuth0();
  console.log(error);
  return (
    <div className='flex lg:w-3/4 w-full  mx-auto flex-col md:flex-row  md:justify-between md:gap-0 gap-5  md:mb-10 p-10 pt-8 sm:mt-5'>
      <Link to="/" className='flex justify-start items-center md:items-start '>
        <img src={logo} className='w-10 object-contain' />
        <span className=" mx-2 sm:mx-5 font-bold  text-lg sm:text-2xl font-satoshi brand">SnapSum</span>
      </Link>
      <div className='flex sm:gap-2  gap-1 items-center justify-around md:justify-between sm:mt-0 flex-row ' >
        <Wavebtn name= {"Pricing"} link={"/Pricing"} />
        <div className='hidden sm:flex'><Wavebtn name= {"About"} link={"/about"} /></div>
        
        
        {error && alert("Login failed")&&<div className='font-bold'> X </div>}
        {isLoading && <img src={loader} className='w-10 object-contain' />}
        {isAuthenticated && <Wavebtn name={"Profile"} link={"/Profile"} />}
        {isAuthenticated && <Logoutbtn />}
       
        {!error && !isLoading && !isAuthenticated && (
        <Loginbtn />
        )}
      <DarkModeSwitch />
      </div>
    </div>
  );
};

export default Nav;
