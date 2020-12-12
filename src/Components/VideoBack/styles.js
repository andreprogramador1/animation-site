import styled from 'styled-components'

export const IframeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    width: 100vw;
    height: 100vh;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    box-sizing: border-box;
    padding-bottom: 20vh;
    overflow: hidden;
    margin-bottom: 1rem;
    

  iframe {
    width: 100vw;
    height: 56.25vw;
    min-height: 100vh;
    min-width: 177vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    background-color: #180f59;
    
  }

  .video-text {
    position: relative;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 60px;

    .text-1 {
      white-space: nowrap;
      width: fit-content;
      padding: 0px 30px;
      
    }

    .text-2 {
      white-space: nowrap;
      width: fit-content;
      
      padding: 0px 30px;
      
    }

    h1 {
      color: #180f59;
      background-color: white; 
      border-radius: 500px;
      font-size: 60px;
  
    }
  }
`;

