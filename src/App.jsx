import React, { useState } from 'react'
import './App.css'

export default () => {
  const [box, setBox] = useState({
    size: '10',
    hue: '0',
    radius: '0',
  })

  const { size, hue, radius } = box

  const style = {
    width: size + 'px',
    height: size + 'px',
    borderRadius: radius + '%',
    backgroundColor: `hsl(${hue}deg, 70%, 70%)`,
  }

  return (
    <div className="App">
      <label>
        Size:{' '}
        <input
          value={size}
          name="size"
          onChange={handleChange}
          type="range"
          max="200"
        />
      </label>
      <label>
        Color:{' '}
        <input
          value={hue}
          name="hue"
          onChange={handleChange}
          type="range"
          max="359"
        />
      </label>
      <label>
        Radius:{' '}
        <input
          value={radius}
          name="radius"
          onChange={handleChange}
          type="range"
          max="50"
        />
      </label>
      <div style={style} className="Box" />
    </div>
  )

  function handleChange(event) {
    const input = event.target
    setBox({
      ...box,
      [input.name]: input.value,
    })
  }
}
