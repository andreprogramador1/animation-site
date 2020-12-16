import React, { useEffect, useRef } from 'react'
import {MiddleContainer} from './styles'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const MiddleContent = () => {

  gsap.registerPlugin(ScrollTrigger);  

  const imgRef = useRef();

  gsap.to('.img-container', {
    scrollTrigger: {
      trigger: '.content',
      start: 'top top',
      end: 'bottom bottom',
      pin: '.img-container',
      //markers: true
    }
  })
  // start: 'top top',
  // end: 'bottom bottom',

  return (
    <>
    <MiddleContainer>
      <div className='img-container' ref={imgRef}>
        <img src="https://www.aplusc.tv/assets/uploads/_sideHalfImage/Website-Main-Page_05.jpg" alt="image"/>
      </div>
      <div className='content'>

        <h1><br/><br/></h1>
        <h2>We're A+C, a UK animation</h2>
        <h2>studio & production company</h2>
        
        <div className="p-container">
          <p className='first-p'>As specialists in stop-motion and animation for advertising and social content, we produce anything animated - from paper-craft to motion design.</p>
          <p>For over 10 years we’ve been creating award-winning animations for some of the world’s best-known brands, including LEGO, British Airways and TK Maxx.</p>
          <p>We’re a fully equipped animation production company with our own crew and studio space, which makes your life easier and keeps production costs down.</p>
        </div>

        <h2 className='second-h2'>Got an idea or a script? Let’s</h2>
        <h2>make it happen!</h2>
        <p className="p-container">If you have a fully shaped animation brief, script, or even the start of an idea, we’re happy to chat. Our experienced production team are ready to run through your concept and help with scheduling, budgeting and technical queries.</p>
        <p className="p-container">Get in touch with us HERE</p>
        
      </div>

      


    </MiddleContainer>
    
    {/* <div style={{ width: '100vw', backgroundColor: 'blue', height: '2200px', zIndex: '99' }}></div> */}
    {/* <div style={{ width: '100%' }}>
      <p>We're A+C, a UK animation studio & production company</p>  
          <p>Website Main Page 05</p>
          <p>As specialists in stop-motion and animation for advertising and social content, we produce anything animated - from paper-craft to motion design.</p>

          <p>For over 10 years we’ve been creating award-winning animations for some of the world’s best-known brands, including LEGO, British Airways and TK Maxx.</p>

          <p>We’re a fully equipped animation production company with our own crew and studio space, which makes your life easier and keeps production costs down.</p>

          <p>Got an idea or a script? Let’s make it happen!</p>
          <p>If you have a fully shaped animation brief, script, or even the start of an idea, we’re happy to chat. Our experienced production team are ready to run through your concept and help with scheduling, budgeting and technical queries.</p>

        <p>Get in touch with us HERE</p>
    </div> */}
    </>
  );
  
}