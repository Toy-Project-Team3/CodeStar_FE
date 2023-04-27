import Link from 'next/link';
import styled from 'styled-components';

export const MainContaier = styled.div`
  border-bottom: 1px solid #2a2a2a;
  padding: 5rem 3rem;
  line-height: 1.5;
  background-color: ${(p) => p.theme.color.dark2};
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  a {
    img {
      width: 5rem;
      height: 5rem;
      display: block;
      margin-right: 1.5rem;
      background-color: #1e1e1e;
      object-fit: cover;
      border-radius: 2.4rem;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
    }
  }

  .username {
    font-size: 2rem;
    color: #ececec;
    font-weight: bold;
    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;

export const ThumbnailLink = styled.div`
  padding-top: 52%;
  margin-bottom: 1rem;
  width: 100%;
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    background-color: ${(p) => p.theme.color.light};
  }
`;

export const TitleLink = styled.div`
  color: inherit;
  text-decoration: none;

  h2 {
    font-size: 2.4rem;
    color: #ececec;
    word-break: keep-all;
  }
`;

export const ContentContianer = styled.div`
  p {
    margin: 0.5rem 0 2rem;
    font-size: 1.6rem;
    color: #d9d9d9;
    word-break: keep-all;
    overflow-wrap: break-word;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  color: #acacac;
  font-size: 1.4rem;

  .separator {
    margin: 0 1rem;
  }

  .likes {
    display: flex;
    align-items: center;

    svg {
      margin-right: 1rem;
    }
  }
`;
