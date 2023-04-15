import {
  ThemeBorderProps,
  ThemeColorProps,
  ThemeFlexProps,
  ThemeGridProps,
  ThemeLayoutProps,
  ThemeShadowProps,
  ThemeSpaceProps
} from './'

export type BoxProps = ThemeBorderProps &
  ThemeColorProps &
  ThemeFlexProps &
  ThemeGridProps &
  ThemeLayoutProps &
  ThemeShadowProps &
  ThemeSpaceProps & {
    display?: string
    draggable?: boolean
  }
