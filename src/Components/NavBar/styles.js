import styled from 'styled-components'

export const NavDesktop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin-top: 10px;

  .background-left-nav-item {
    display: flex;
    align-items: center;
    background-color: #180f59;
    border-radius: 0px 500px 500px 0;
    width: 100px;
    height: 50px;
    //padding: 10px 20px;
    color: white;
    justify-content: space-evenly;
  }
`;

export const BurgerContainer = styled.div`
  width: 25%;

  div {
    width: 12px;
    height: 3px;
    background-color: white;
    margin-top: 2px;
  }

  .item-2 {
    margin-left: 5px;
  }
  .item-3 {
    margin-left: 10px;
  }
`;