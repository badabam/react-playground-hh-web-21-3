import * as React from 'react'
import './Card.css'

export default function Card({ title, copyText, isBookmarked }) {
  const bookmarkClass = isBookmarked
    ? 'Card__bookmark Card__bookmark--active'
    : 'Card__bookmark'

  return (
    <section className="Card">
      <button className={bookmarkClass} aria-label="Bookmark card"></button>
      <h2 className="Card__title">{title}</h2>
      <p>{copyText}</p>
    </section>
  )
}
