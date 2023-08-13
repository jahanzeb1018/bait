// components
import Circles from '/components/Circles';
import React, { useState } from "react";

// icons
import { BsArrowRight } from 'react-icons/bs';

// framer
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

// email
import {useRef} from "react";
import emailjs from '@emailjs/browser';

// validator
import validator from 'validator';

const Contact = () => {

  const [emailError, setEmailError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  // Email Validation
const validateEmail = (e) => {
  var email = e.target.value

  if (validator.isEmail(email)) {
     setEmailError('')
     setIsEmailValid(true);
  } else {
     setEmailError('Invalid email');
     setIsEmailValid(false);
  }
};

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_64duftj', 'template_v6newie', form.current, 'RvqKJ3bW_lC-efK4f')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex
      items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2 
            variants={fadeIn('up', 0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className='h2 text-center mb-12'
          >
            Let&apos;s <span className='text-accent'>connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form 
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn('up', 0.4)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"           
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            {/* group */}
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='Name' name='user_name' className='input' required/>
              <input 
                type='text' 
                placeholder='Email' 
                name='user_email' 
                className='input' 
                onChange={(e) => validateEmail(e)}
                /> <span style={{color: 'red' }}>{emailError}</span>
            </div>
            <input type='text' placeholder='Subject' name='user_subject' className='input' required/>
            <textarea placeholder='Message' name='user_text' className='textarea' required></textarea>
            <button type="submit" className={`btn --btn-primary rounded-full border border-white/50 max-w-[170px]
            px-8 transition-all duration-300 flex items-center justify-center
            overflow-hidden hover:border-accent group'EmailValid ? 'disabled' : ''}`} disabled={!isEmailValid}>
              
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0
              transition-all duration-500'>
                Let&apos;s talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex
              group-hover:-translate-y-0 group-hover:opacity-100 transition-all
              duration-300 absolute text-[22px]'/>
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
