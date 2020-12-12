import React from 'react'
import {MenuOpened} from './styles'
import {MenuLinkContainerLeft} from './styles'

export const MenuOpen = () => {
  return (
    <MenuOpened>
      <div className="left-item">

        <MenuLinkContainerLeft>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Work</a>
          <a href="#">About us</a>
          <a href="#">Studios</a>
          <a href="#">Carrers</a>
          <a href="#">Blog</a>
          <a href="#">Contact us</a>
        </MenuLinkContainerLeft>

      </div>

      <div className='right-item'>

      </div>
    </MenuOpened>
  );
}