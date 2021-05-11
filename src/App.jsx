import * as React from 'react'
import Card from './Card'
import './App.css'

const cards = [
  { title: 'Hello world', text: 'How are you?', isBookmarked: false, id: 1 },
  {
    title: 'Hi again',
    text: 'I am great, thank you',
    isBookmarked: true,
    id: 2,
  },
]

export default () => {
  return (
    <div className="App">
      {cards.map(({ id, title, text, isBookmarked }) => (
        <Card
          key={id}
          title={title}
          copyText={text}
          isBookmarked={isBookmarked}
        />
      ))}
    </div>
  )
}
