import style from '@renderer/assets/styles/button.module.scss'

export function IconButton(props: {
  onClick?: () => void
  icon: JSX.Element
  text?: string
  bordered?: boolean
  shadow?: boolean
  className?: string
  title?: string
}) {
  return (
    <div
      className={
        style['icon-button'] +
        ` ${props.bordered && style.border} ${props.shadow && style.shadow} ${
          props.className ?? ''
        } clickable`
      }
      onClick={props.onClick}
      title={props.title}
      role="button"
    >
      <div className={style['icon-button-icon']}>{props.icon}</div>
      {props.text && <div className={style['icon-button-text']}>{props.text}</div>}
    </div>
  )
}
