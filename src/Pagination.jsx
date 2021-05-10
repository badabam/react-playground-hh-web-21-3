import * as React from 'react'
import './Pagination.css'

export default function Pagination({ text, isLeftDisabled, isRightDisabled }) {
  return (
    <section className="Pagination">
      <button className={isLeftDisabled ? '' : 'active'}>&lt;</button>
      {text}
      <button className={isRightDisabled ? '' : 'active'}>&gt;</button>
    </section>
  )
}
