import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

export default () => {
  const [size, setSize] = useState(100)

  const style = {
    width: size + 'px',
    height: size + 'px',
  }

  return (
    <div className="App">
      <label>
        Size:
        <input value={size} onChange={handleChange} type="range" max="200" />
      </label>
      <div style={style} className="Box" />
    </div>
  )

  function handleChange(event) {
    const input = event.target
    setSize(input.value)
  }
}
