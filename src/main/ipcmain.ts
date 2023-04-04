import { channels, events } from '@bridge/index'
import { BrowserWindow, ipcMain } from 'electron'

export function registerWindowActions(mainWindow: BrowserWindow) {
  ipcMain.on(channels.windowMinSize, () => {
    mainWindow.minimize()
  })
  ipcMain.on(channels.toggleSize, () => {
    if (mainWindow.isMaximized()) {
      mainWindow.restore()
    } else {
      mainWindow.maximize()
    }
  })
  ipcMain.on(channels.windowClose, () => {
    mainWindow.close()
  })

  mainWindow.on(events.maximize, () => {
    mainWindow.webContents.send(channels.windowIsMaxed, true)
  })

  mainWindow.on(events.unmaximize, () => {
    mainWindow.webContents.send(channels.windowIsMaxed, false)
  })
}
