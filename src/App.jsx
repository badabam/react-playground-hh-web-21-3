import React, { useState } from 'react'
import './App.css'

export default () => {
  const [size, setSize] = useState('100')
  const [hue, setHue] = useState('0')

  const style = {
    width: size + 'px',
    height: size + 'px',
    backgroundColor: `hsl(${hue}deg, 70%, 70%)`,
  }

  return (
    <div className="App">
      <label>
        Size:{' '}
        <input
          value={size}
          onChange={handleSizeChange}
          type="range"
          max="200"
        />
      </label>
      <label>
        Color:{' '}
        <input value={hue} onChange={handleHueChange} type="range" max="359" />
      </label>
      <div style={style} className="Box" />
    </div>
  )

  function handleSizeChange(event) {
    const input = event.target
    setSize(input.value)
  }

  function handleHueChange(event) {
    const input = event.target
    setHue(input.value)
  }
}
