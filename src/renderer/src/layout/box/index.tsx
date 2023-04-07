import '@renderer/assets/styles/layout.scss'
import { CSSProperties, ReactNode } from 'react'

type LayoutProps = {
  type: 'left' | 'right' | 'bar' | 'main' | 'custom'
  children?: ReactNode
  style?: CSSProperties
  draggable?: boolean
  className?: string
}
function Box({ type, children, style, draggable, className }: LayoutProps) {
  const layoutClass = `layout-${type}`
  const layoutStyle = draggable ? { ...style, WebkitAppRegion: 'drag' } : style
  return (
    <div className={`${layoutClass} ${className ?? ''}`} style={layoutStyle}>
      {children}
    </div>
  )
}

export default Box
