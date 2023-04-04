import style from '@renderer/assets/styles/left.module.scss'
import { IconButton } from '../iconbutton'
import { ChatGpt, CodiconAdd, CodiconSettings } from './icons'
function LeftPanel() {
  return (
    <div className={style.leftContainer}>
      <div className={style.leftLogo}>
        <span>ChatGPT</span>
        <ChatGpt />
      </div>
      <div className={style.chatContainer}></div>
      <div className={style.chatOperateRegion}>
        <IconButton
          icon={<CodiconSettings />}
          onClick={() => {
            console.log(1)
          }}
          shadow
        />

        <IconButton
          icon={<CodiconAdd />}
          text={`New Chat`}
          onClick={() => {
            console.log(1)
          }}
          shadow
        />
      </div>
    </div>
  )
}
export default LeftPanel
