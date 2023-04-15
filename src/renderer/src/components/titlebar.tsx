import { channels } from '@bridge/index'
import { ChromeClose, ChromeMinimize, ChromeToggle } from '@renderer/components/icons'
import { ThemeProps } from '@renderer/typings/theme'
import ipcRenderer from '@renderer/utils/ipcRenderer'
import { useState } from 'react'
import styled from 'styled-components'
import { background, borderBottom, boxShadow, compose } from 'styled-system'

function toggleSize() {
  ipcRenderer.send(channels.toggleSize)
}
function winMinSize() {
  ipcRenderer.send(channels.windowMinSize, true)
}
function winClose() {
  ipcRenderer.send(channels.windowClose, true)
}

const BarBox = styled('div')`
  ${compose(background, boxShadow, borderBottom)}
  &.titleBarContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${({ theme }: ThemeProps) => theme.borders.$2};
    box-shadow: ${({ theme }: ThemeProps) => theme.shadows.small};
    background-color: ${({ theme }: ThemeProps) => theme.colors.bg2};
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
    background-color: ${({ theme }: ThemeProps) => theme.colors.secondary};
  }
  &.actionClose:hover {
    background-color: ${({ theme }: ThemeProps) => theme.colors.danger};
  }
`

function TitleBar() {
  const [state, setState] = useState(false)
  ipcRenderer.on(channels.windowIsMaxed, (_, winstate) => {
    setState(winstate)
  })
  return (
    <BarBox className={`titleBarContainer`}>
      <BarBox className={`dragRegion`}></BarBox>
      <BarBox className={`actions`}>
        <BarBox className={`actionMin`} onClick={winMinSize}>
          <ChromeMinimize />
        </BarBox>
        <BarBox className={`actionZoom`} onClick={toggleSize}>
          <ChromeToggle action={state ? 1 : 0} />
        </BarBox>
        <BarBox className={`actionClose`} onClick={winClose}>
          <ChromeClose />
        </BarBox>
      </BarBox>
    </BarBox>
  )
}

export default TitleBar
