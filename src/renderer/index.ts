import { remote } from "electron"

window.__IPC__ = {
  openFile: () =>
    remote.dialog.showOpenDialog({
      properties: ["openFile"],
    }),
}
