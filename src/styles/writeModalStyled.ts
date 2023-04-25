import styled from 'styled-components';
import { Button } from '@/styles/buttonStyled';

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
  gap: 1rem;
  h3 {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }
  h4 {
    font-size: 3.5rem;
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
  label {
    border: 1px solid black;
    border-radius: 0.4rem;
    height: 4rem;
    padding: 0 2rem;
    font-weight: 800;
    font-size: 1.8rem;
    cursor: pointer;
    display: flex;
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
