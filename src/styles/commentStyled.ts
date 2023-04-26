import styled from 'styled-components';

export const CommentContainer = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid #9c9c9c;
`;

export const WriterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  .profile {
    display: flex;
    align-items: center;

    img {
      width: 5.4rem;
      height: 5.4rem;
      display: block;
      border-radius: 2.5rem;
      object-fit: cover;
    }

    .comment-info {
      margin-left: 1rem;
      line-height: 1.5;

      .username {
        font-size: 1.6rem;
        font-weight: bold;
        color: #ececec;

        a {
          color: inherit;
          text-decoration: none;
        }
      }

      .date {
        margin-top: 0.5rem;
        color: #acacac;
        font-size: 1.4rem;
      }
    }
  }
`;

export const ContentContainer = styled.div`
  font-size: 1.8rem;
  color: #ececec;
  transition: color 0.125s ease-in 0s;
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;
`;
