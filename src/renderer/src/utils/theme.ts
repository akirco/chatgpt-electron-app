import { createGlobalStyle } from 'styled-components'
export const lightTheme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa'
  },
  fonts: {
    body: 'pingfang'
  },
  borders: {
    normal: '1px solid #ccc',
    thick: '2px solid #007bff'
  },
  sizes: {
    lg: '200px'
  },
  zIndex: {}
}
export const darkTheme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa'
  },
  fonts: {
    body: 'pingfang'
  },
  borders: {
    normal: '1px solid #ccc',
    thick: '2px solid #007bff'
  }
}
type ThemeProps = typeof lightTheme | typeof darkTheme

export const GlobalStyles = createGlobalStyle<ThemeProps>`
body{
  background-color: ${(theme) => theme.colors.light};
    color: ${(theme) => theme.colors.primary};
    font-family: 'Open Sans', sans-serif;
    transition: all 0.50s linear;
}
`
