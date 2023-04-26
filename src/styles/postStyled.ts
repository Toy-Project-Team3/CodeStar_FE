import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  padding: 0 10rem;
`;

export const TitleContainer = styled.div`
  margin: 5.5rem auto 0;
  width: 768px;
  .title-wrapper {
    h1 {
      font-size: 5rem;
      line-height: 1.5;
      letter-spacing: -0.004em;
      margin-top: 0px;
      font-weight: 800;
      color: #ececec;
      margin-bottom: 2rem;
      word-break: break-all;
      transition: color 0.125s ease-in 0s;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: -1.25rem;
  button {
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    color: #acacac;
    margin-left: 0.5rem;
    font-size: 1.6rem;
    :hover {
      color: #ececec;
    }
  }
`;

export const InformContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  color: #d9d9d9;
  .username {
    color: #ececec;
    font-weight: bold;
    a {
      color: inherit;
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
  }
  .separator {
    margin: 0 0.5rem;
  }
`;

export const ThumbnailImage = styled.img`
  max-height: 100vh;
  max-width: 100%;
  width: auto;
  margin: 2rem auto 0px;
  height: auto;
  object-fit: contain;
  display: block;
`;

export const StickyContainer = styled.div`
  position: absolute;
  left: -10rem;
`;

export const StickyWrapper = styled.div`
  width: 6rem;
  background-color: #1e1e1e;
  border: 1px solid #2a2a2a;
  border-radius: 3rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: ${({ scrollY }) => (scrollY ? 'fixed' : 'relative')};
  top: 120px;

  .sticky--icon {
    height: 4rem;
    width: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1e1e1e;
    border: 1px solid #4d4d4d;
    border-radius: 2rem;
    color: #acacac;
    cursor: pointer;
    padding-top: 0.2rem;
  }

  .count {
    margin-top: 1rem;
    color: #d9d9d9;
    line-height: 1;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
`;

export const ContentContainer = styled(TitleContainer)`
  font-size: 10rem;
`;

export const WriterContainer = styled.div`
  margin: 24rem auto 9rem;
  width: 768px;
`;
export const WriterWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  img {
    display: block;
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 4px 0px;
  }

  .writerInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 2rem;

    .name {
      font-size: 2.4rem;
      line-height: 2;
      font-weight: bold;
      color: #ececec;
      a {
        text-decoration: none;
        color: inherit;
        :hover {
          text-decoration: underline;
        }
      }
    }

    .description {
      white-space: pre-wrap;
      font-size: 1.8rem;
      line-height: 2;
      margin-top: 0.5rem;
      color: #d9d9d9;
      letter-spacing: -0.004em;
    }
  }

  .score {
    position: absolute;
    right: 0;

    width: 10rem;
    height: 10rem;
  }
`;

export const UnderLine = styled.div`
  background-color: #898989;
  width: 100%;
  height: 1px;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;

export const CommentContainer = styled.div`
  margin: 4rem auto;
  color: #d9d9d9;

  width: 768px;
  h4 {
    font-size: 2.4rem;
    line-height: 1.8;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .comment-container {
    margin-top: 2.5rem;
  }
`;

export const CommentWrapper = styled.div``;

export const CommentTextArea = styled.textarea`
  resize: none;
  padding: 1.5rem;
  outline: none;
  border: 1px solid #2a2a2a;
  margin-bottom: 1.5rem;
  width: 100%;
  border-radius: 0.5rem;
  min-height: 10rem;
  font-size: 1.8rem;
  color: #d9d9d9;
  line-height: 1.75;
  background-color: #1e1e1e;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: #12b886;
    color: #fff;
    border-radius: 0.5rem;
    padding: 0 1.8rem;
    height: 3rem;
    font-size: 1.5rem;

    :hover {
      background-color: #63e6be;
    }
  }
`;
