import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MainWrapper = styled.div`
  background-color: ${(p) => p.theme.background.main};
  color: ${(p) => p.theme.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  z-index: 1;
  background: ${(p) => p.theme.background.dark};
  width: 100%;
  height: 8rem;
  display: flex;
  padding: 2rem 10rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  .logo {
    cursor: pointer;
    svg {
      width: 15rem;
      height: 10rem;
    }
  }
  div {
    display: flex;
    gap: 4rem;
  }
`;

export const HeaderSearchButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #f5f5fa;
  transition: 0.2s;
  :hover {
    transform: scale(1.2);
  }
  a {
    color: inherit;
  }
`;

export const HeaderWriteButton = styled(motion.button)`
  width: 14rem;
  cursor: pointer;
  background-color: transparent;
  color: ${(p) => p.theme.text};
  border: 0.2rem solid ${(p) => p.theme.text};
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
  border-radius: 2.5rem;
`;

export const HeaderProfile = styled.div`
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: ${(p) => p.theme.text};
`;

export const MainContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  gap: 3rem;
  padding: 0 10rem;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MainContentItem = styled(motion.div)`
  box-shadow: 0 0 1rem ${(p) => p.theme.background.dark};
  width: 90%;
  height: 35rem;
  border: 1px solid ${(p) => p.theme.text};
  border-radius: 0.4rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .thumbnail {
    width: 100%;
    height: 50%;
    background-color: ${(p) => p.theme.text};
    a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .content {
    a {
      text-decoration: none;
      color: inherit;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 0 1rem;
    }
    .title {
      font-size: 2.5rem;
      font-weight: ${(p) => p.theme.fontWeight.bold};
    }
    .description {
      font-size: 1.6rem;
    }
  }
`;
