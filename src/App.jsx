import React, { useState, useEffect } from 'react'
import { saveToLocal, loadFromLocal } from './lib/localStorage'
import './App.css'

export default function App() {
  const [users, setUsers] = useState(loadFromLocal('users') ?? [])
  const [url, setUrl] = useState('https://reqres.in/api/users')

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(resBody => setUsers([...users, ...resBody.data]))
  }, [url])

  useEffect(() => {
    saveToLocal('users', users)
  }, [users])

  return (
    <div className="App">
      <button onClick={() => setUrl('https://reqres.in/api/users?page=2')}>
        Change url
      </button>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.first_name}</li>
        ))}
      </ul>
    </div>
  )
}
