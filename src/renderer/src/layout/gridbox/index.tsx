import styled, { CSSProperties, css } from 'styled-components'

interface GridBoxProps {
  style?: CSSProperties
  draggable?: boolean
  className?: string
  width?: string
  height?: string
  rows?: string
  columns?: string
  gap?: string
  templateAreas?: string
}

const GridBox = styled.div<GridBoxProps>`
  display: grid;
  grid-template-rows: ${(props) => props.rows || 'auto'};
  grid-template-columns: ${(props) => props.columns || 'auto'};
  grid-gap: ${(props) => props.gap || '0'};
  grid-template-areas: ${(props) => props.templateAreas || 'none'};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  ${(props) =>
    props.draggable &&
    css`
      -webkit-app-region: drag;
    `}
`
export default GridBox
