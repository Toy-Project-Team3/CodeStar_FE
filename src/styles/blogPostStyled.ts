import styled from 'styled-components';

export const MainContainer = styled.div`
  border-bottom: 1px solid #2a2a2a;
  padding: 6rem 0;
  line-height: 1.5;

  a {
    color: inherit;
    text-decoration: none;

    .title {
      font-size: 2.4rem;
      color: #ececec;
      word-break: keep-all;
    }
  }

  .content {
    margin-bottom: 2rem;
    margin-top: 0.5rem;
    font-size: 1.6rem;
    color: #d9d9d9;
    word-break: keep-all;
    overflow-wrap: break-word;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  color: #797979;
  font-weight: 600;
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
