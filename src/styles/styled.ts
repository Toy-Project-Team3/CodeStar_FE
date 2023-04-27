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
  background: ${(p) => p.theme.background.main};
  width: 100%;
  height: 8rem;
  display: flex;
  padding: 0 10rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  .logo {
    cursor: pointer;
    svg {
      width: 15rem;
      height: 4em;
    }
  }
  div {
    display: flex;
    align-items: center;
    gap: 3rem;
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
  width: 10rem;
  height: 4rem;
  cursor: pointer;
  background-color: transparent;
  color: ${(p) => p.theme.text};
  border: 0.2rem solid ${(p) => p.theme.text};
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  border-radius: 2.5rem;
`;
export const MyInfo = styled.div`
  position: relative;
`;

export const MyList = styled.ul`
  position: absolute;
  top: 7rem;
  right: 0;
  width: 18rem;
  background: #222;
  li * {
    display: block;
    padding: 1rem 1.5rem;
    line-height: 1.5;
    font-size: 1.4rem;
    cursor: pointer;
    color: ${(p) => p.theme.text};
  }
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
  width: 32rem;
  height: 35rem;
  border: none;
  border-radius: 0.4rem;
  background-color: ${(p) => p.theme.color.dark2};
  cursor: pointer;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 2fr 3fr;
  .thumbnailContainer {
    height: 17rem;
    .thumbnail {
      width: 100%;
      height: 100%;
    }
    .emptyThumbnail {
      width: 100%;
      height: 100%;
      background-color: ${(p) => p.theme.color.lightDark};
    }
  }
  .itemBody {
    display: grid;
    grid-template-rows: 3fr 1fr;
    .itemPost {
      padding: 1.6rem 1rem;
      line-height: 1.5;
      color: ${(p) => p.theme.text};
      .postTitle {
        font-size: 1.6rem;
        font-weight: ${(p) => p.theme.fontWeight.bold};
        height: 2.4rem;
        overflow: hidden;
        max-lines: 1;
      }
      .postContent {
        font-size: 1.4rem;
        font-weight: ${(p) => p.theme.fontWeight.normal};
        height: 6.3rem;
        overflow: hidden;
        max-lines: 3;
      }
      .subInfo {
        display: flex;
        gap: 1rem;
        font-size: 1.2rem;
        color: ${(p) => p.theme.color.light};
      }
    }
    .itemUser {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 4fr 1fr;
      height: 100%;
      padding: 1rem 1.6rem;
      border-top: 1px solid ${(p) => p.theme.color.light};
      opacity: 0.8;
      font-size: 1.2rem;
      color: ${(p) => p.theme.text};
      .userProfileImg {
        display: flex;
        justify-content: center;
        img {
          width: 2.4rem;
          height: 2.4rem;
          border-radius: 50%;
        }
      }
      .userName {
        display: flex;
        gap: 0.7rem;
        span {
          color: ${(p) => p.theme.color.light};
          opacity: 0.8;
        }
        p {
          font-weight: ${(p) => p.theme.fontWeight.bold};
        }
      }
      .postLikes {
        height: 1.2rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        svg {
          width: 1.2rem;
        }
      }
    }
  }
`;
export const HeaderLoginButton = styled(motion.button)`
  width: 10rem;
  height: 4rem;
  cursor: pointer;
  background-color: transparent;
  color: ${(p) => p.theme.text};
  border: 0.2rem solid ${(p) => p.theme.text};
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  border-radius: 2.5rem;
`;
