import * as React from 'react'
import Card from './Card'
import './App.css'

export default () => {
  return (
    <div className="App">
      <Card title="Hello world" copyText="How are you?" />
      <Card isBookmarked title="Hi again" copyText="I am great" />
    </div>
  )
}
