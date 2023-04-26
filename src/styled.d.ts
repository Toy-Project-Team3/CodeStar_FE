import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      main: string;
      light: string;
      dark: string;
    };
    text: string;
    loading: string;
    primary: string;
    warning: string;
    danger: string;
    point: string;
    fontWeight: {
      normal: number;
      semiBold: number;
      bold: number;
    };
    color: {
      highlight: string;
      darkHighlight: string;
      dark: string;
      dark2: string;
      lightDark: string;
      light: string;
    };
  }
}
