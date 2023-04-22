import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
`;
export const Wrapper = styled.div`
  box-sizing: border-box;
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
      border-bottom: 2px solid #fff;
    }
  }
`;
export const WriteFooter = styled.div`
  height: 6.4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.2rem;
  button {
    border-radius: 0.4rem;
    border: 0;
    outline: none;
    height: 4rem;
    padding: 0 2rem;
    font-weight: 800;
    font-size: 1.8rem;
  }
`;
