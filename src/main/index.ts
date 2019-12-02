import path from "path"
import { app, BrowserWindow } from "electron"

function createWindow() {
  let win = new BrowserWindow({
    width: 1280,
    height: 960,
    webPreferences: {
      preload: path.join(__dirname, "renderer.js"),
    },
  })

  win.loadFile(path.join(__dirname, "index.html"))
}

app.on("ready", createWindow)
