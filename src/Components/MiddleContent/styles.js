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
    z-index: -99;
  }

  .content {
    width: 50%;
    transform: translateX(100%);
    min-height: 101vh;

    h2 {
      width: 50%;
      background-color: white;
      font-weight: 600;
      color: #180f59;
      z-index: 100;
      position: relative;
      padding: .25rem 1.5rem;
      line-height: 1.2;
      border-radius: 500px;
      transform: translateX(-100px);
      font-size: 3.5833333333rem;
      white-space: nowrap;
      width: fit-content;
    }

    p {
      color: #180f59;
      font-size: 1.11rem;
      margin-top: 20px;
    }

    .first-p {
      font-size: 1.438rem;
      margin-top: 50px;
    }

    .p-container {
      padding: 0px 90px 73px;
    }

    .second-h2 {
      margin-top: 100px;
    }
  }
`;