import { ThemeProps } from '@renderer/typings/theme'
import { createGlobalStyle } from 'styled-components'
import { darkTheme, lightTheme } from './theme'

export function createTheme(type: string) {
  if (type === 'light') {
    return lightTheme
  } else {
    return darkTheme
  }
}

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-rendering:"optimizeLegibility";
  };
  #root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  };
  html,body{
    width: 100vw;
    height: 100vh;
  };
  body{
    background-color: ${({ theme }: ThemeProps) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.info};
    font-family: "pingfang";
    transition: background-color 0.50s linear;
  };
`
