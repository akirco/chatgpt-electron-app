import { IconButtonProps } from '@renderer/typings/button'
import { ThemeProps } from '@renderer/typings/theme'
import React from 'react'
import styled, { css } from 'styled-components'
import { border, color, compose, layout, shadow, space } from 'styled-system'

const IconWrapper = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonWrapper = styled.div<IconButtonProps>`
  ${compose(color, border, layout, shadow, space)};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  user-select: none;
  border-radius: ${({ theme }: ThemeProps) => theme.radii.sm};
  ${({ bg }) =>
    bg &&
    css`
      background-color: ${({ theme }: ThemeProps) => theme.colors.bg2};
    `}
  ${({ bordered }) =>
    bordered &&
    css`
      border: ${({ theme }: ThemeProps) => theme.borders.$1};
    `}
  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: ${({ theme }: ThemeProps) => theme.shadows.button};
    `}
`

const IconButton: React.FC<IconButtonProps> = ({ h, w, onClick, icon, text, bordered, shadow }) => (
  <ButtonWrapper h={h} w={w} bordered={bordered} shadow={shadow} onClick={onClick}>
    <IconWrapper>{icon}</IconWrapper>
    {text && <div>{text}</div>}
  </ButtonWrapper>
)

export default IconButton
