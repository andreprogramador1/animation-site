import React from 'react'
import {MenuOpened} from './styles'
import {MenuLinkContainer} from './styles'

export const MenuOpen = () => {
  return (
    <MenuOpened>
      <div className="left-item">

        <MenuLinkContainer>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </MenuLinkContainer>

      </div>
      
      <div className='right-item'>

      </div>
    </MenuOpened>
  );
}