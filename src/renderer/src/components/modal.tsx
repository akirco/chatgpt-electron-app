import { CSSProperties, FC, ReactNode, useEffect } from 'react'

type ModalPropsType = {
  isOpen: boolean
  onClose?: () => void
  children?: ReactNode
  style?: CSSProperties
  className?: string
  fullScreen?: boolean
  overlayParent: 'body' | 'current'
  size?: {
    width: number
    height: number
  }
}

const Modal: FC<ModalPropsType> = ({
  isOpen,
  children,
  overlayParent,
  style,
  fullScreen,
  size,
  onClose
}) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  const modalStyle: CSSProperties = {
    position: overlayParent === 'body' ? 'fixed' : 'relative',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 9999,
    ...style
  }

  const modalOverlayStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }

  const modalContentStyle: CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: ' 50%',
    transform: 'translate(-50%, -50%)',
    width: fullScreen ? '100%' : size!.width,
    height: fullScreen ? '100%' : size!.height,
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: fullScreen ? '' : '4px',
    boxShadow: fullScreen ? '' : '0 0 10px rgba(0, 0, 0, 0.3)'
  }

  return (
    <div style={modalStyle}>
      <div style={modalOverlayStyle} onClick={onClose} />
      <div style={modalContentStyle}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default Modal
