import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65%;

    img {
      height: 337px;
      max-width: 100%;
      border-radius: 10px;
      box-shadow: 0 6px 9px rgba(0,0,0,0.2);
      min-width: 100%;
      object-fit: cover;
    }

    .second-img {
      margin-left: 30px;

    }

    .card-1 {
      flex: 1;
      position: relative;

      & > h6 {
        position: absolute;
        left: 5%;
        bottom: 8%;
        width: fit-content;
        background-color: white;
        border-radius: 500px;
        padding: 10px;
      }
    }

    .card-2 {
      flex: 1;
      position: relative;

      & > h6 {
        position: absolute;
        left: 9%;
        bottom: 8%;
        width: fit-content;
        background-color: white;
        border-radius: 500px;
        padding: 10px;
      }
    }

  }
  .text-container {
     
      display: flex;
      flex-direction: column;
      margin: 100px 0 20px 0;
      /* align-items: baseline;
      padding: 0px 180px; */
      width: 65%;
      align-items: baseline;

      h1 {
        margin-bottom: 18px;
      }

      button {
        background-color: #fdd51c;
        color: #180f59;
        border-radius: 500px;
        border: none;
        font-weight: 800;
        padding: 10px 20px;
        cursor: pointer;
      }
    }
`;