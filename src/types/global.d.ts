import { OpenDialogReturnValue } from "electron"

interface IpcInterface {
  openFile(): Promise<OpenDialogReturnValue>
}

declare global {
  interface Window {
    __IPC__?: IpcInterface
  }
}
