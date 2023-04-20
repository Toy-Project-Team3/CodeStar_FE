import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 10rem;
`;

export const ProfileHeader = styled.div`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: 1fr 2.8fr 1fr;
  width: 100%;
  height: fit-content;
  position: relative;

  .col1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    border-right: 0.1rem solid #848484;

    .profile__img {
      width: 20rem;
      height: 20rem;
      border-radius: 50%;
      background-color: ${(p) => p.theme.text};
    }

    button {
      width: 25rem;
      height: 5rem;
      border: none;
      color: ${(p) => p.theme.text};
      cursor: pointer;
      border-radius: 0.3rem;
      font-size: 1.5rem;
      font-weight: ${(p) => p.theme.fontWeight.bold};

      &.upload {
        background-color: ${(p) => p.theme.point};
      }

      &.delete {
        background-color: ${(p) => p.theme.danger};
      }
    }
  }

  .col2 {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: inherit;
    padding: 0 2rem;
    h1 {
      font-size: 4rem;
      font-weight: ${(p) => p.theme.fontWeight.bold};
    }
    p {
      font-size: 1.5rem;
    }
    button {
      display: flex;
      justify-content: start;
      width: 15rem;
      height: 3rem;
      border: none;
      background-color: transparent;
      color: ${(p) => p.theme.primary};
      font-size: 3rem;
      font-weight: ${(p) => p.theme.fontWeight.bold};
      cursor: pointer;
      text-decoration: underline ${(p) => p.theme.background.dark};
    }
  }
`;

export const ProfileBody = styled.div``;
