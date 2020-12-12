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