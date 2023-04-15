import { BoxProps } from '@renderer/typings/box'
import styled, { css } from 'styled-components'
import { border, color, compose, flexbox, grid, layout, shadow, space } from 'styled-system'

const Box = styled.div<BoxProps>`
  display: ${(props) => props.display};
  ${compose(space, layout, flexbox, grid, border, shadow, color)}
  ${(props) =>
    props.draggable &&
    css`
      -webkit-app-region: drag;
    `}
`

export default Box
