import styled, { CSSProperties, css } from 'styled-components'

interface FlexBoxProps {
  style?: CSSProperties
  draggable?: boolean
  className?: string
  width?: string
  height?: string
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  justify?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  align?: 'stretch' | 'center' | 'start' | 'end'
  flex?: string
}

const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'stretch'};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  ${(props) =>
    props.flex &&
    css`
      flex: ${props.flex};
    `}
  ${(props) =>
    props.draggable &&
    css`
      -webkit-app-region: drag;
    `}
`
export default FlexBox
