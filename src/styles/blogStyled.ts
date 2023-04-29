import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 768px;
  margin: 10rem auto 0;
`;

export const OwnerContainer = styled.div`
  margin-top: 6rem;

  .wrapper {
    display: flex;
    align-items: center;
    div {
      img,
      svg {
        display: block;
        width: 12.8rem;
        height: 12.8rem;
        border-radius: 50%;
        object-fit: cover;
        box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 4px 0px;
      }
    }

    .owner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 2rem;

      .name {
        font-size: 2.4rem;
        line-height: 1.5;
        font-weight: bold;
        color: #ececec;
        a {
          color: inherit;
          text-decoration: none;
          :hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

export const UnderLine = styled.div`
  background-color: #898989;
  width: 100%;
  height: 1px;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`;

export const CategoryContainer = styled.div`
  margin-top: 6rem;
  margin-bottom: 6rem;
  display: flex;
  justify-content: center;

  div {
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    color: #63e6be;
    width: 20%;
    border-bottom: 1px solid;
    padding-bottom: 2rem;
  }
`;

export const ContentContainer = styled.div`
  .section {
    display: flex;
    justify-content: end;
    margin-bottom: 3rem;

    .input--wrapper {
      display: flex;
      height: 2.25rem;
      border: 1px solid #a0a0a0;
      padding: 2rem 1rem;
      align-items: center;
      transition: all 0.125s ease-in 0s;
      cursor: text;

      input {
        width: 20rem;
        margin-left: 2rem;
        font-size: 2rem;
        border: none;
        outline: 0px;
        background: transparent;
        color: #d9d9d9;
      }
    }
  }
`;
