import { channels } from '@bridge/index'
import style from '@renderer/assets/styles/titlebar.module.scss'
import { ChromeClose, ChromeMinimize, ChromeToggle } from '@renderer/components/titlebar/icons'
import ipcRenderer from '@renderer/utils/ipcRenderer'
import { useState } from 'react'

function toggleSize() {
  ipcRenderer.send(channels.toggleSize)
}

function winMinSize() {
  ipcRenderer.send(channels.windowMinSize, true)
}
function winClose() {
  ipcRenderer.send(channels.windowClose, true)
}

function TitleBar() {
  const [state, setState] = useState(false)
  ipcRenderer.on(channels.windowIsMaxed, (_e, winstate) => {
    setState(winstate)
  })
  return (
    <div className={style.titleBarContainer}>
      <div className={style.dragRegion}></div>
      <div className={style.actions}>
        <div className={style.actionMin} onClick={winMinSize}>
          <ChromeMinimize />
        </div>
        <div className={style.actionMaxOrRestore} onClick={toggleSize}>
          <ChromeToggle action={state ? 1 : 0} />
        </div>
        <div className={style.actionClose} onClick={winClose}>
          <ChromeClose />
        </div>
      </div>
    </div>
  )
}

export default TitleBar
