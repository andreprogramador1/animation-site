import styled from 'styled-components'
import {motion} from 'framer-motion'

export const MenuOpened = styled(motion.div)`
  height: 100vh;
  display: flex;
  position: fixed;
  z-index: 1;
  width: 100%;
  .left-item {
    background-color: #8644ff;
    flex: 1;
  }
  .right-item {
    background-color: #7b9ce9;
    flex: 1;
  }
`;

export const MenuLinkContainerLeft = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    height: 80vh;
    margin-left: 80px;


    &:first-child {
      margin-top: 120px;
    }

    .inner-link-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-decoration: none;
      span {
        color: white;
        font-size: 60px;
        font-weight: 700;
      }
     
      &:after {
        content: '';
        background-color: #fdd51c;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        transform: scale(0);
        transition: transform 0.2s;
      }

      &:hover:after {
          transform: scale(1);
        
      }
    }

    
`;

export const MenuLinkContainerRight = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-right: 30px;

    .social-container {
      display: flex;
      flex-wrap: wrap;
      img {
        width: 50px;
      }
      img:not(first-child) {
        margin-left: 70px;
      }
    }

    strong {
      width: 100%;
      color: white;
      font-size: 40px;
      margin-left: 200px;
      margin-bottom: 20px;
    }
`;