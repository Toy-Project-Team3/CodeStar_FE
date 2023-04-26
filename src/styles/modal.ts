import styled from 'styled-components';

export const modalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100vh;
  color: #000;
  z-index: 2;
  .dim {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const modalForm = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 68rem;
  height: 55rem;
  background: ${(p) => p.theme.text};
  .close {
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
  }
  .contents {
    display: flex;
    width: 100%;
  }
`;

export const modalLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35%;
  padding: 2rem;
  text-align: center;
  font-size: 2.4rem;
  font-weight: 700;
  background: #e3e3ed;
  img,
  svg {
    width: 100%;
    height: auto;
    margin-bottom: 2rem;
  }
`;
export const modalRight = styled.div`
  display: flex;
  width: 65%;
  padding: 5rem;
  flex: 1 1 0%;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 3rem;
  }

  .form_id {
    position: relative;
    span {
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translateY(calc(-50% - 0.5rem));
      font-size: 1.2rem;
      color: #818181;
      font-weight: ${(p) => p.theme.fontWeight.semiBold};
      cursor: pointer;
    }
  }

  input {
    width: 100%;
    height: 4.8rem;
    padding: 1rem;
    font-size: 1.6rem;
    border: 0.1rem solid ${(p) => p.theme.loading};
    margin-bottom: 1rem;
  }

  button {
    width: 10rem;
    line-height: 4rem;
    font-size: 1.6rem;
    background: ${(p) => p.theme.primary};
    border: none;
    color: ${(p) => p.theme.text};
    cursor: pointer;
  }

  p {
    font-size: 1.2rem;
    text-align: right;
    span {
      color: ${(p) => p.theme.primary};
      font-weight: ${(p) => p.theme.fontWeight.semiBold};
      cursor: pointer;
    }
  }

  .error {
    color: ${(p) => p.theme.danger};
    margin-bottom: 1rem;
  }
`;
