import * as React from 'react'
import './Pagination.css'
import Button from './Button'

export default function Pagination({ currentPage, totalPages }) {
  return (
    <section className="Pagination">
      <Button isActive={currentPage !== 1}>&lt;</Button>
      {currentPage}/{totalPages}
      <Button isActive={currentPage !== totalPages}>&gt;</Button>
    </section>
  )
}
