import React, { useState } from 'react'
import { NavDesktop, BurgerContainer } from './styles'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import {MenuOpen} from '../MenuOpen'

export const NavBar = () => {

  const [active, setActive] = useState(false)
  const [burger, setBurger] = useState('')

  const handleBurger = () => {
    setBurger(!burger);
  };

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
    <>
    {active && <MenuOpen/>}
    
    <NavDesktop>
      <motion.a
      to='#' className='background-left-nav-item'
      animate='visible'
      initial="hidden"
      variants={variants}
      onClick={handleToggle}
      >
        
        <span>{active ? 'Close' : 'Menu'}</span>
        <BurgerContainer>
          
          <motion.div className={active ? 'item-active-1' : 'item-1'}></motion.div>
          <motion.div className='item-2'></motion.div>
          <motion.div className={active ? 'item-active-3' : 'item-3'}></motion.div>
          <div className='item-4' style={{ display: 'none' }}></div>
          <div className='item-5' style={{ display: 'none' }}></div>
        </BurgerContainer>
      </motion.a>
      <img src="https://www.aplusc.tv/assets/site-images/ac.gif" alt="logo"/>
      <a href="#" className='contact'>Contact us</a>
    </NavDesktop>
    </>
  );
}