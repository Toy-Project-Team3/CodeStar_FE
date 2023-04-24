import styled from 'styled-components';

export const Background = styled.div`
  padding: 20vh 10vw;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;

  /* &:focus {
    transform: translateY(-100vh);
  } */
`;
export const Container = styled.div`
  padding: 3.2rem;
  height: 42.5rem;
  width: 35.1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
  h3 {
    font-size: 2.1rem;
    margin-bottom: 0.8rem;
  }
  .thumbnailContainer {
    height: 19.3rem;
    position: relative;
    border: 0.1rem solid black;
  }
  .emptyThumbnail {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    button {
      outline: none;
      background: none;
    }
  }
`;
