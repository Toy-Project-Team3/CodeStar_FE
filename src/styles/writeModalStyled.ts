import styled from 'styled-components';

export const Inner = styled.div`
  padding: 20vh 10vw;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -100vh;
  z-index: 9;
  transition: all 1s linear;
  /* &:focus {
    transform: translateY(-100vh);
  } */
`;
export const Container = styled.div`
  padding: 32px;
  height: 425px;
  width: 351px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 21px;
    margin-bottom: 8px;
  }
  .thumbnailContainer {
    height: 193px;
    position: relative;
  }
  .emptyThumbnail {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    button {
      outline: none;
      background: none;
    }
  }
`;
