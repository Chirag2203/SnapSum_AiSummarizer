import React from 'react'
import {Link} from 'react-router-dom'
import Social from './Social'
const Footer = () => {
  return (
    <div className='w-full flex justify-between sm:px-16 py-12 gap-2 sm:gap-12 '>
      <div className='flex flex-col items-start w-1/2 summary_box'>
        <h1 className='text-xl font-bold text-center blue_gradient'>SnapSum</h1>
        <span className='text-md mt-5'>Snapsum is an experimental App, which can help you summarize articles and more!</span>

      </div>
      <div className='flex flex-col items-start summary_box w-1/2 '>
        <span className='text-xl  font-bold text-center blue_gradient '>Useful Links</span>
        <Link to={'/'} className='text-lg  text-center mt-5'>Home</Link>
        <Link to ={'/About'} className='text-lg  text-center '>About</Link>
        <Link to={'/Contact'} className='text-lg  text-center'>Contact</Link>
        <Link to={'/Policy'} className='text-lg  text-center'>Policy</Link>

      </div>
      {/* <div className='summary_box w-1/3'>
        <span className='blue_gradient text-xl  font-bold text-center '>Connect with us</span>

      </div> */}
      <Social/>
    </div>
  )
}

export default Footer
