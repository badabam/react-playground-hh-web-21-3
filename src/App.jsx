import * as React from 'react'
import Pagination from './Pagination'

export default () => {
  return (
    <div>
      <Pagination currentPage={1} totalPages={34} />
      <Pagination currentPage={2} totalPages={34} />
      <Pagination currentPage={34} totalPages={34} />
    </div>
  )
}
