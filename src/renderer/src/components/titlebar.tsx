import ipcRenderer from '@render/utils/ipcRenderer'
import { channels } from '@bridge/index'
import styled from '@emotion/styled'
import { useState } from 'react'
import { VscClose, VscChromeRestore, VscChromeMaximize, VscChromeMinimize } from 'react-icons/vsc'

const BarBox = styled('div')`
  &.barContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    background-color: #f6f8fa;
  }
  &.dragRegion {
    -webkit-app-region: drag;
    user-select: none;
    height: 35px;
    width: 100%;
    line-height: 35px;
  }
  &.actions {
    display: grid;
    grid-template-columns: repeat(3, 50px);
    height: 35px;
    line-height: 35px;
    text-align: center;
    & > * {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
  &.actionMin:hover,
  &.actionZoom:hover {
    background-color: #e3e4e6;
  }
  &.actionClose:hover {
    background-color: #e45454;
  }
`

function TitleBar() {
  const [state, setState] = useState(false)
  ipcRenderer.on(channels.windowIsMaxed, (_, winstate) => {
    setState(winstate)
  })
  return (
    <BarBox className={`barContainer`}>
      <BarBox className={`dragRegion`}></BarBox>
      <BarBox className={`actions`}>
        <BarBox
          className={`actionMin`}
          onClick={() => ipcRenderer.send(channels.windowMinSize, true)}
        >
          <VscChromeMinimize />
        </BarBox>
        <BarBox className={`actionZoom`} onClick={() => ipcRenderer.send(channels.toggleSize)}>
          {state ? <VscChromeRestore /> : <VscChromeMaximize />}
        </BarBox>
        <BarBox
          className={`actionClose`}
          onClick={() => ipcRenderer.send(channels.windowClose, true)}
        >
          <VscClose />
        </BarBox>
      </BarBox>
    </BarBox>
  )
}

export default TitleBar
