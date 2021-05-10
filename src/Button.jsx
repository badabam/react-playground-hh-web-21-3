import './Button.css'
import * as React from 'react'

export default ({ children, isActive, hidden }) => {
  return (
    <button hidden={hidden} className={isActive ? 'Button active' : 'Button'}>
      {children}
    </button>
  )
}
