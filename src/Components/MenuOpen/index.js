import React from 'react'
import {MenuOpened} from './styles'
import {MenuLinkContainerLeft, MenuLinkContainerRight} from './styles'
import {motion} from 'framer-motion'

export const MenuOpen = () => {

  const variants = {
    hidden: { opacity: 0, y: '-100%'},
    visible: {
      opacity: 1,
      y: 0
    }
  }

  // const ballVariants = {
  //   hidden: { opacity: 0, scale: 0},
  //   visible: {
  //     opacity: 1,
  //     whileHover: {
  //       scale: 1.1
  //     }
  //   }
  // }

  return (
    <MenuOpened
      animate='visible'
      initial='hidden'
      variants={variants}
    >
      <div className="left-item">

        <MenuLinkContainerLeft>

          <a  href='#' className="inner-link-container">
            <span>Home</span>
            
          </a>
          <a  href='#' className="inner-link-container">
            <span>Services</span>
            
          </a>
          <a  href='#' className="inner-link-container">
            <span>Work</span>
            
          </a>
          <a  href='#' className="inner-link-container">
            <span>About us</span>
            
          </a>
          <a  href='#' className="inner-link-container">
            <span>Studios</span>
            
          </a>
          <a  href='#' className="inner-link-container">
            <span>Carrers</span>
            
          </a>
          <a  href='#' className="inner-link-container">
            <span>Blog</span>
            
          </a>
          <a  href='#' className="inner-link-container">
            <span>Contact us</span>
            
          </a>
          
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