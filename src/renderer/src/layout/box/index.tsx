import styled, { CSSProperties, css } from 'styled-components'

interface BoxProps {
  type: 'left' | 'right' | 'bar' | 'main'
  style?: CSSProperties
  draggable?: boolean
  className?: string
}

const Box = styled.div<BoxProps>`
  /* left */
  ${(props) =>
    props.type === 'left' &&
    css`
      width: 300px;
      height: 100%;
      &.leftPanel {
        background-color: var(--left-panel-bg);
        border-right: var(--left-panel-br);
        box-shadow: var(--border-shadow);
      }
    `}
  /* right */
   ${(props) =>
    props.type === 'right' &&
    css`
      flex: 1;
    `}
     /* bar */
       ${(props) =>
    props.type === 'bar' &&
    css`
      height: 35px;
      width: inherit;
      user-select: none;
      &.rightTopBar {
        background-color: var(--titlebar-bg);
      }
    `}
     /* main */
       ${(props) =>
    props.type === 'main' &&
    css`
      height: calc(100% - 35px);
    `}
     /* draggable */
       ${(props) =>
    props.draggable &&
    css`
      -webkit-app-region: drag;
    `}
`
export default Box
