import * as React from 'react'
import './Card.css'

export default function Card({
  title,
  question,
  choices,
  answer,
  isBookmarked,
  doShowAnswer,
}) {
  const bookmarkClass = isBookmarked
    ? 'Card__bookmark Card__bookmark--active'
    : 'Card__bookmark'

  return (
    <section className="Card">
      <button className={bookmarkClass} aria-label="Bookmark card"></button>
      <h2 className="Card__title">{title}</h2>
      <dl>
        <dt className="Card__question">
          🧐 {question}
          <ul className="Card__choices">
            {choices.map(choice => (
              <li key={choice}>{choice}</li>
            ))}
          </ul>
        </dt>
        <dd className="Card__answer" hidden={!doShowAnswer}>
          🤓 {answer}
        </dd>
      </dl>
    </section>
  )
}
