import React from 'react'
import { IframeContainer } from './styles'

export const VideoBack = () => {
  return (

    <IframeContainer>
      <iframe
      src="https://player.vimeo.com/video/472707154?background=1&autoplay=1&loop=1&byline=0&title=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
      </iframe>

      <div className="video-text">
        <h1 className='text-1'>Hello! we're an</h1>
        <h1 className='text-2'>animation studio</h1>
      </div>
    </IframeContainer>
  );
  
}