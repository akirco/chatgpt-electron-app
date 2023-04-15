import { ThemePropsType } from '@renderer/typings/theme'
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  HeightProps,
  LayoutProps,
  ShadowProps,
  SpaceProps
} from 'styled-system'

export type ThemeBorderProps = BorderProps<ThemePropsType>

export type ThemeColorProps = ColorProps<ThemePropsType>

export type ThemeFlexProps = FlexboxProps<ThemePropsType>

export type ThemeGridProps = GridProps<ThemePropsType>

export type ThemeLayoutProps = LayoutProps<ThemePropsType>

export type ThemeShadowProps = ShadowProps<ThemePropsType>

export type ThemeSpaceProps = SpaceProps<ThemePropsType>

export type ThemeHeightProps = HeightProps<ThemePropsType>
