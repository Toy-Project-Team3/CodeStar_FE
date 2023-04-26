import styled, { css } from 'styled-components';

export const Button = styled.button`
  outline: none;
  border: 0.1rem solid transparent;
  border-radius: 0.4rem;
  outline: none;
  height: 4rem;
  padding: 0 2rem;
  font-weight: 800;
  font-size: 1.8rem;
  cursor: pointer;
`;
export const UnderlinedBtn = styled.button`
  outline: none;
  border: 0.1rem solid transparent;
  padding: 0 1.2rem;
  background-color: transparent;
  text-decoration: underline;
  font-size: 1.6rem;
  color: #acacac;
`;
export const DarkHighlightBtn = styled(Button)`
  background-color: ${(p) => p.theme.color.dark};
  color: ${(p) => p.theme.color.highlight};
  &:hover {
    background-color: ${(p) => p.theme.color.lightDark};
  }
`;
export const DarkLightBtn = styled(Button)`
  background-color: ${(p) => p.theme.color.dark};
  color: ${(p) => p.theme.color.light};
  &:hover {
    background-color: ${(p) => p.theme.color.light};
    color: ${(p) => p.theme.color.dark2};
  }
`;
export const LightDarkBtn = styled(Button)`
  /* ${(p) =>
    css`
      background-color: ${p.theme.color.light};
    `} */
  background-color: ${(p) => p.theme.color.light};
  color: ${(p) => p.theme.color.dark};
  &:hover {
    background-color: ${(p) => p.theme.color.dark};
    color: ${(p) => p.theme.color.light};
  }
`;
export const HighlightDarkBtn = styled(Button)`
  background-color: ${(p) => p.theme.color.highlight};
  color: ${(p) => p.theme.color.dark};
  &:hover {
    background-color: ${(p) => p.theme.color.darkHighlight};
  }
`;
