import * as React from 'react'
import Card from './Card'
import './App.css'
import { decode } from 'html-entities'
import { v4 as uuidv4 } from 'uuid'

import data from './data.json'

const cards = data.map(item => ({
  id: uuidv4(),
  title: item.category,
  question: decode(item.question),
  choices: item.incorrect_answers
    .concat(item.correct_answer)
    .map(answer => ({ sort: Math.random(), value: decode(answer) }))
    .sort((a, b) => a.sort - b.sort)
    .map(item => item.value),
  answer: decode(item.correct_answer),
  isBookmarked: Math.random() > 0.5,
  doShowAnswer: Math.random() > 0.5,
}))

export default () => {
  return (
    <div className="App">
      {cards.map(
        ({
          id,
          title,
          question,
          choices,
          answer,
          isBookmarked,
          doShowAnswer,
        }) => (
          <Card
            key={id}
            title={title}
            question={question}
            choices={choices}
            answer={answer}
            isBookmarked={isBookmarked}
            doShowAnswer={doShowAnswer}
          />
        )
      )}
    </div>
  )
}
