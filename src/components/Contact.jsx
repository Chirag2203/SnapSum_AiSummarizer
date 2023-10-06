import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9r7hkv7', 'template_9hsu0wq', form.current, '_c6H6o2R2NKw20mo1')
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true); // Set the state to indicate that the form has been submitted successfully
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div div className='min-h-screen w-full sm:w-3/4 mx-auto flex md:flex-row flex-col items-center md:items-start md:justify-between gap-5'>
      <span className='blue_gradient lg:text-5xl text-4xl uppercase p-2 text-center'>Contact US</span>

      {isSubmitted ? ( // Conditionally render based on isSubmitted state
        <div className='text-xl font-satoshi'>
          <p>Thank you for your message! I will get back to you shortly.</p>
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail} className='summary_box flex flex-col p-12 md:w-1/2 w-full gap-5 h-2/3'>
          <div className='flex flex-col font-satoshi'>
            <label className='orange_gradient font-bold'>Name</label>
            <input type="text" name="user_name" className='rounded-lg p-1 bg-blue-50' />
          </div>
          <div className='flex flex-col font-satoshi'>
            <label className='orange_gradient font-bold'>Email</label>
            <input type="email" name="user_email" className='p-1 bg-blue-50' />
          </div>
          <div className='flex flex-col font-satoshi'>
            <label className='orange_gradient font-bold '>Message</label>
            <textarea name="message" className='p-1 bg-blue-50' />
          </div>
          <input className='bg-blue-500 p-1 rounded-lg text-white font-satoshi' type="submit" value="Send" />
        </form>
      )}
    </div>
  );
};

export default Contact;
