import { CSSProperties, ReactNode } from 'react'

type LayoutProps = {
  type: 'left' | 'right' | 'bar' | 'main'
  children?: ReactNode
  style?: CSSProperties
  draggable?: boolean
}
function Layout({ type, children, style, draggable }: LayoutProps) {
  const layoutClass = `layout-${type}`
  const layoutStyle = draggable ? { ...style, WebkitAppRegion: 'drag' } : style
  return (
    <div className={layoutClass} style={layoutStyle}>
      {children}
    </div>
  )
}

export default Layout
