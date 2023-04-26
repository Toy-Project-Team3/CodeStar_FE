import styled from 'styled-components';

export const MainContainer = styled.div`
  margin: 14rem auto 0;
  width: 768px;

  .input--Wrapper {
    display: flex;
    border: 1px solid #909090;
    align-items: center;
    transition: all 0.125s ease-in 0s;
    cursor: text;
    height: 6rem;
    padding: 0px 2.5rem;
    :focus-within {
      border: 1px solid #e0e0e0;
    }

    input {
      margin-left: 2.5rem;
      font-size: 2rem;
      transition: all 0.125s ease-in 0s;
      flex: 1 1 0%;
      display: block;
      line-height: 1rem;
      height: 6rem;
      border: none;
      outline: none;
      background: transparent;
      color: #e9e9e9;
    }
    input::placeholder {
      color: #e9e9e9;
    }
  }
`;
