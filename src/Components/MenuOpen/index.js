import React from 'react'
import {MenuOpened} from './styles'
import {MenuLinkContainerLeft, MenuLinkContainerRight} from './styles'

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

      <MenuLinkContainerRight>
          <strong>Follow Us</strong>

          <div className="social-container">
            <img src="https://www.aplusc.tv/assets/uploads/twitter.svg" alt="twitter"/>
            <img src="https://www.aplusc.tv/assets/uploads/youtube.svg" alt="youtube"/>
            <img src="https://www.aplusc.tv/assets/uploads/vimeo.svg" alt="vimeo"/>
            <img src="https://www.aplusc.tv/assets/uploads/instagram.svg" alt="instagram"/>
            <img src="https://www.aplusc.tv/assets/uploads/linkedin.svg" alt="linkdin"/>
            <img src="https://www.aplusc.tv/assets/uploads/facebook.svg" alt="facebook"/>
          </div>
          
        </MenuLinkContainerRight>

      </div>
    </MenuOpened>
  );
}