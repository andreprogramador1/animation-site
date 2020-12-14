import styled from 'styled-components'


export const MiddleContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: #f6f5ff;

  .img-container {
    position: absolute;
    top: 0px;
  }
  img {
    width: 50vw;
    height: 100vh;
    object-fit: cover;
   
  }

  .content {
    width: 50%;
    transform: translateX(100%);
  }
`;