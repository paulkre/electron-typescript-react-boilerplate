import React from "react"
import ReactDOM from "react-dom"

async function handleClick() {
  if (window.__IPC__) {
    const res = await window.__IPC__.openFile()
    console.log(res.filePaths)
  } else console.log("Function not available")
}

const Index = () => (
  <div>
    <button onClick={handleClick}>Open File</button>
  </div>
)

ReactDOM.render(<Index />, document.getElementById("app"))
