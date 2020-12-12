import React from 'react'
import { NavDesktop, BurgerContainer } from './styles'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <NavDesktop>
      <a to='#' className='background-left-nav-item'>
        <span>Menu</span>
        <BurgerContainer>
          <div className='item-1'></div>
          <div className='item-2'></div>
          <div className='item-3'></div>
          <div className='item-4' style={{ display: 'none' }}></div>
          <div className='item-5' style={{ display: 'none' }}></div>
        </BurgerContainer>
      </a>
      <img src="https://www.aplusc.tv/assets/site-images/ac.gif" alt="logo"/>
      <a href="#">Contact us</a>
    </NavDesktop>
  );
}