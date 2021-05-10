import * as React from 'react'
import Button from './Button'
import './Header.css'

export default function Header({ isBackButtonVisible }) {
  return (
    <header className="Header">
      <Button hidden={!isBackButtonVisible} isActive>
        &lt;
      </Button>
      Header
    </header>
  )
}
