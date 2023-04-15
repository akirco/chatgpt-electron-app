import { darkTheme, lightTheme } from '@renderer/theme/theme'

export type ThemePropsType = typeof lightTheme | typeof darkTheme

export type ThemeProps = { theme: ThemePropsType }
type k = keyof ThemePropsType['borders']
