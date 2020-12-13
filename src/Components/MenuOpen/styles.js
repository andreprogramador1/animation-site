import styled from 'styled-components'
import {motion} from 'framer-motion'

export const MenuOpened = styled(motion.div)`
  height: 100vh;
  display: flex;

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
    
    height: 80vh;
    margin-left: 80px;

    a {
      text-decoration: none; 
      color: white;
      font-size: 60px;
      font-weight: 700;
    }
    a:first-child{
      margin-top: 120px;
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