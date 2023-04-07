import style from '@renderer/assets/styles/main.module.scss'
function Main() {
  return (
    <div className={style.mainContiner}>
      <div className={style.chatTopic}>
        <div className={style.topicInfo}></div>
        <div className={style.topicExportNoUse}>
          <div className={style.drag}></div>
        </div>
      </div>
      <div className={style.chatMessage}></div>
    </div>
  )
}

export default Main
