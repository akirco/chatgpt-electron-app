import style from '@renderer/assets/styles/left.module.scss'

function LeftPanel() {
  return (
    <div className={style.leftContainer}>
      <div className={style.leftLogo}></div>
      <div className={style.chatContainer}></div>
      <div className={style.chatOperateRegion}></div>
    </div>
  )
}
export default LeftPanel
