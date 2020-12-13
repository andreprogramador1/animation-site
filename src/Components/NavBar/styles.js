import styled from 'styled-components'
import { motion } from 'framer-motion'

export const NavDesktop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  position: fixed;
  z-index: 1;
  width: 100%;

  img {
    width: 110px;
  }

  .background-left-nav-item {
    display: flex;
    align-items: center;
    background-color: rgba(234, 232, 253, 0.5);
    border-radius: 0 500px 500px 0;
    width: 120px;
    height: 50px;
    //padding: 10px 20px;
    color: #180f59;
    justify-content: space-evenly;
    cursor: pointer;
    font-weight: 600;
    transition: background-color .2s;
    backdrop-filter: blur(8px);
    :hover {
      background-color: #180f59;
      color: white;
    } 
  }

  .contact {
    display: flex;
    align-items: center;
    background-color: rgba(234, 232, 253, 0.5);
    border-radius: 500px 0px 0px 500px;
    width: 120px;
    height: 50px;
    //padding: 10px 20px;
    color: #180f59;
    justify-content: space-evenly;
    text-decoration: none;
    font-weight: 600;
    transition: background-color .2s;
    backdrop-filter: blur(8px);

    :hover {
      background-color: #180f59;
      color: white;
    } 
  }

  

`;

export const BurgerContainer = styled(motion.div)`
  width: 25%;

  div {
    width: 12px;
    height: 3px;
    background-color: white;
    margin-top: 2px;
  }

  .item-1 {
    transition: 250ms ease-in-out;
  }

  .item-2 {
    margin-left: 5px;
  }
  .item-3 {
    margin-left: 10px;
    transition: 250ms ease-in-out;
  }

  

    .item-active-1 {
      margin-left: 10px;
      transition: 250ms ease-in-out;
    } 
    
    .item-active-3 {
      margin-left: 0;
      margin-right: 10px;
      transition: 250ms ease-in-out;
    }
  
`;