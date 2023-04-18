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
    fontWeight: {
      normal: number;
      semiBold: number;
      bold: number;
    };
  }
}
