import styled from 'styled-components';
import { Button } from '@/styles/buttonStyled';

export const Background = styled.div`
  position: absolute;
  z-index: 9;
  padding: 20vh 10vw;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background-color: ${(p) => p.theme.color.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(100px);
`;
export const Container = styled.div`
  padding: 3.2rem;
  height: 50rem;
  width: 35.1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .btnContainer {
    padding: 0 0 0.5rem 0;
    display: flex;
    justify-content: flex-end;
  }
  h3 {
    font-size: 1.6rem;
    margin: 1rem 0 0.5rem 0.5rem;
    color: ${(p) => p.theme.color.light};
  }
  h4 {
    height: 3.5rem;
    padding: 0.7rem 1rem;
    font-size: 2.5rem;
    background-color: ${(p) => p.theme.color.dark2};
    color: #fff;
  }
  .thumbnailImgContainer {
    background-color: ${(p) => p.theme.color.dark2};
    height: 19.3rem;
    position: relative;
  }
  .emptyThumbnail {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 1rem;
  }
  label {
    background-color: #202020;
    color: ${(p) => p.theme.color.darkHighlight};
    border-radius: 0.4rem;
    height: 4rem;
    padding: 0 2rem;
    font-family: 'Pretendard Regular';
    font-weight: 800;
    font-size: 1.8rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover {
      opacity: 0.8;
    }
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    .active {
      border: 1px solid ${(p) => p.theme.color.highlight};
      color: ${(p) => p.theme.color.highlight};
    }
  }
`;
