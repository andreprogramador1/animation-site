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

export const MenuLinkContainer = styled(motion.div)`
  
`;