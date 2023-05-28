import { colors } from './colors'

export const baseTheme = {
  space: {
    none: '0',
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '32px',
    xl: '64px',
    xxl: '128px'
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    xxl: '32px'
  },
  fonts: {
    pf: 'pingfang'
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700
  },
  lineHeights: {
    xs: '1.0',
    sm: '1.2',
    md: '1.5',
    lg: '1.8',
    xl: '2.0',
    xxl: '2.5'
  },
  letterSpacings: {
    xs: '0.5px',
    sm: '1px',
    md: '1.5px',
    lg: '2px',
    xl: '3px',
    xxl: '4px'
  },
  sizes: {
    fit: '100%',
    xs: '320px',
    sm: '480px',
    md: '768px',
    lg: '960px',
    xl: '1024px',
    xxl: '1200px',
    xxxl: '1280px',
    xxxxl: '1366px',
    xxxxxl: '1920px',
    xxxxxxl: '2160px'
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px'
  },
  zIndices: {
    background: -1,
    content: 0,
    dropdown: 1,
    overlay: 2,
    modal: 3,
    popover: 4,
    tooltip: 5
  },
  transitions: {
    fast: '0.2s ease-in-out',
    normal: '0.4s ease-in-out',
    slow: '0.6s ease-in-out',
    button: '0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    input: '0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    nav: '0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    modal: '0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    fade: 'opacity 0.3s ease-in-out'
  },
  shadows: {
    small: '0 1px 2px rgba(0, 0, 0, 0.05)',
    medium: '0 2px 4px rgba(0, 0, 0, 0.1)',
    large: '0 4px 8px rgba(0, 0, 0, 0.2)',
    hover: '0 8px 16px rgba(0, 0, 0, 0.3)',
    active: '0 12px 24px rgba(0, 0, 0, 0.4)',
    card: '0 4px 12px rgba(0, 0, 0, 0.15)',
    button: '0 2px 6px rgba(0, 0, 0, 0.2)',
    input: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
    focus: '0 0 0 2px rgba(0, 0, 0, 0.2)'
  }
}

export const lightTheme = {
  ...baseTheme,
  colors: {
    bg: '#ffffff',
    bg2: '#f6f8fa',
    primary: '#0096ff',
    secondary: '#e3e4e6',
    success: '#3fc2a7',
    danger: '#e45454',
    warning: '#ff943a',
    info: '#90a4ae',
    ...colors
  },
  borders: {
    $1: '1px solid #d0d7de',
    $2: '1px solid #efefef'
  }
}

export const darkTheme = {
  ...baseTheme,
  colors: {
    bg: '#1a1b26',
    bg2: '#1f2937',
    primary: '#acb4dc',
    secondary: '#363b4f',
    success: '#74c7f8',
    danger: '#e45454',
    warning: '#ff943a',
    info: '#90a4ae',
    ...colors
  },
  borders: {
    $1: '1px solid #1f2937',
    $2: '1px solid #303a4c'
  }
}
