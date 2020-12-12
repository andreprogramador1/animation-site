import React, { useState } from 'react'
import { NavDesktop, BurgerContainer } from './styles'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

export const NavBar = () => {

  const [active, setActive] = useState('false')

  const handleToggle = () => {
    setActive(!active);
  };
  const variants = {
    hidden: { opacity: 0},

    visible: {
      opacity: 1,
     
    }
  }

  return (
    <NavDesktop>
      <motion.a
      to='#' className='background-left-nav-item'
      animate='visible'
      initial="hidden"
      variants={variants}
      onClick={handleToggle}
      >
        <span>Menu</span>
        <BurgerContainer>
          <div className='item-1'></div>
          <div className='item-2'></div>
          <div className='item-3'></div>
          <div className='item-4' style={{ display: 'none' }}></div>
          <div className='item-5' style={{ display: 'none' }}></div>
        </BurgerContainer>
      </motion.a>
      <img src="https://www.aplusc.tv/assets/site-images/ac.gif" alt="logo"/>
      <a href="#" className='contact'>Contact us</a>
    </NavDesktop>
  );
}