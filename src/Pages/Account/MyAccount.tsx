import React from 'react'
import { useLocalStorage } from '../../lib/useLocalStorage'

const MyAccount = () => {
  const description = 'Hello there test page!'
  const [username] = useLocalStorage('username')

  return (
    <div>
      {username()}
      <p>{description}</p>
    </div>
  )
}

export default MyAccount
