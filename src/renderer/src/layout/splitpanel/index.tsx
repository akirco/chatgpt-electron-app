import { CSSProperties, FC, ReactNode, useState } from 'react'

interface SeparatorProps {
  direction: 'horizontal' | 'vertical'
  onDrag: (distance: number) => void
}

const Separator: FC<SeparatorProps> = ({ direction, onDrag }) => {
  const separatorRef = useRef<HTMLDivElement>(null)
  const [resizing, setResizing] = useState(false)
  const [separatorBg, setSeparatorBg] = useState('#5655575c')

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    setSeparatorBg('#8250df')
  }
  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    setSeparatorBg('#5655575c')
  }
  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    setResizing(true)
  }
  const handleMouseUp = () => {
    setResizing(false)
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (resizing) {
      const separator = separatorRef.current!
      const rect = separator.getBoundingClientRect()
      const offset = direction === 'vertical' ? event.clientY - rect.top : event.clientX - rect.left
      const total = direction === 'vertical' ? rect.height : rect.width
      const left = (offset / total) * 100
      console.log(left)
      onDrag(left)
    }
  }
  const separatorStyle: CSSProperties = {
    cursor: direction === 'horizontal' ? 'ew-resize' : 'ns-resize',
    width: direction === 'horizontal' ? '4px' : '100%',
    height: direction === 'vertical' ? '4px' : '100%',
    backgroundColor: separatorBg,
    transition: 'background-color 0.5s ease'
  }

  return (
    <div
      style={separatorStyle}
      ref={separatorRef}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    />
  )
}

interface SplitPanelProps {
  direction: 'horizontal' | 'vertical'
  initialSize: number
  minSize: number
  maxSize: number
  children: ReactNode[]
}

const SplitPanel: FC<SplitPanelProps> = ({
  direction,
  initialSize,
  minSize,
  maxSize,
  children
}) => {
  const [size, setSize] = useState(initialSize)

  const handleDrag = (distance: number) => {
    const newSize = size + distance
    if (newSize > minSize && newSize < maxSize) {
      setSize(newSize)
    }
  }

  const splitContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
    height: '100%',
    width: '100%'
  }
  const leftPanelStyle: CSSProperties = {
    width: `${size}px`,
    height: '100%',
    overflow: 'auto'
  }
  const rightPanelStyle: CSSProperties = {
    width: `calc('100%' - ${size}px)`,
    height: '100%',
    overflow: 'auto'
  }

  return (
    <div style={splitContainerStyle}>
      <div style={leftPanelStyle}>{children[0]}</div>
      <Separator direction={direction} onDrag={handleDrag} />
      <div style={rightPanelStyle}>{children[1]}</div>
    </div>
  )
}

export default SplitPanel
