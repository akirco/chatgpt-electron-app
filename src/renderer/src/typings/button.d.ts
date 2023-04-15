import {
  ThemeBorderProps,
  ThemeColorProps,
  ThemeHeightProps,
  ThemeLayoutProps,
  ThemeShadowProps,
  ThemeSpaceProps
} from './'

export type IconButtonProps = ThemeBorderProps &
  ThemeColorProps &
  ThemeLayoutProps &
  ThemeShadowProps &
  ThemeHeightProps &
  ThemeSpaceProps & {
    onClick?: () => void
    icon?: JSX.Element
    text?: string
    bordered?: boolean
    shadow?: boolean
    h?: string
    w?: string
  }
