import * as React from 'react'
import Header from './Header'

export default () => {
  return (
    <div>
      <Header isBackButtonVisible>Header with Button</Header>
      <Header>Another Header</Header>
    </div>
  )
}
