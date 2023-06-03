import React from 'react'
import { useLocalStorage } from '../../lib/useLocalStorage'
import Reports from './Reports'

const MyAccount = () => {
  const description = 'This is the Account page'
  const [username] = useLocalStorage('username')

  return (
    <div>
      {username()}
      <p>{description}</p>
      <Reports />
    </div>
  )
}

export default MyAccount
