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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 2rem;
    .col2-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;
      gap: 2rem;
    }
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
    }
  }
`;

export const ProfileCreditScore = styled.div<{ score: number; width: number; height: number }>`
  width: ${(p) => p.width}rem;
  height: ${(p) => p.height}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 0.2rem solid #848484;
  font-size: 2rem;
  font-weight: ${(p) => p.theme.fontWeight.bold};
  color: ${(p) => p.theme.text};
  position: relative;
  overflow: hidden;
  .wave {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(p) => p.theme.primary};
  }
  .score {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ProfileActivity = styled.div`
  width: 100%;
  min-height: 10rem;
  .activity__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    h1 {
      font-size: 3rem;
      font-weight: ${(p) => p.theme.fontWeight.bold};
      position: relative;
      &:after {
        content: '지금까지 활동한 내역입니다.';
        opacity: 0;
        width: 20rem;
        position: absolute;
        font-size: 1.5rem;
        font-weight: ${(p) => p.theme.fontWeight.normal};
        top: -3rem;
        left: 0;
        color: ${(p) => p.theme.text};
        background-color: #454545;
        padding: 0.5rem;
        border-radius: 0.3rem;
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        &::after {
          display: block;
          opacity: 1;
        }
      }
    }

    button {
      font-size: 1.5rem;
      color: ${(p) => p.theme.text};
    }
  }

  .activity__body {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    font-size: 2rem;
    .activity__body__item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
      &.active {
        span {
          color: ${(p) => p.theme.primary};
        }
      }
      span {
        font-size: 2.4rem;
        font-weight: ${(p) => p.theme.fontWeight.bold};
      }
      p {
        font-size: 1.5rem;
      }
    }
  }
  a {
    color: ${(p) => p.theme.text};
    text-decoration: none;
  }
`;

export const ProfileBody = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  h1 {
    font-size: 3rem;
  }
  .none-content {
    width: 100%;
    height: 100%;
    font-weight: ${(p) => p.theme.fontWeight.bold};
    font-size: 3rem;
    line-height: 1.3;
    text-align: center;
  }
`;

export const ProfileBodyPostItem = styled.div`
  width: 80%;
  height: 20rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  flex-direction: column;
  border: 0.1rem solid #848484;
  border-radius: 1rem;

  .post__img {
    height: 100%;
    background-color: ${(p) => p.theme.text};
  }
  .post__content {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
    h1 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;
