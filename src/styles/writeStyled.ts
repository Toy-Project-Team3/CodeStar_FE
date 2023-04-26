import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
`;
export const Wrapper = styled.div`
  box-sizing: border-box;
  min-width: 40rem;
  width: 100%;
  height: 100%;
  padding: 4.8rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const TitleContainer = styled.div`
  height: 8.6rem;
  width: 100%;
  input {
    box-sizing: border-box;
    border-bottom: 2px solid transparent;
    height: 100%;
    width: 100%;
    padding: 1rem 2rem 0 2rem;
    margin-bottom: 1rem;
    font-size: 3rem;
    font-weight: 600;
    outline: none;
    border: none;
    background-color: transparent;
    color: #fff;
    &:focus {
      border-bottom: 2px solid ${(p) => p.theme.color.light};
    }
  }
`;

export const WriteFooter = styled.div`
  height: 6.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .buttons {
    display: flex;
    gap: 1.2rem;
  }
`;
