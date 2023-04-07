import style from '@renderer/assets/styles/button.module.scss'
import { CSSProperties, MouseEventHandler } from 'react'

type IconButtonProps = {
  onClick?: MouseEventHandler
  icon: JSX.Element
  style?: CSSProperties
  text?: string
  type?: string
  className?: string
}

export function IconButton(props: IconButtonProps) {
  return (
    <div
      className={`${style.iconButton} ${props.className ?? ''}`}
      onClick={props.onClick}
      role="button"
    >
      <div className={style.iconButtonIcon}>{props.icon}</div>
      {props.text && <div className={style.iconButtonText}>{props.text}</div>}
    </div>
  )
}
