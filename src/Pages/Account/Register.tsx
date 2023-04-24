import React, { useState } from 'react'
import { useLocalStorage } from '../../lib/useLocalStorage'

const Register = () => {
  const [username, setUsername] = useLocalStorage('username')
  const register = () => {
    setUsername(user)
  }

  const [user, setUser] = useState('')
  //const [pass, setPass] = useState('')

  return (
    <div>
      <h1>Register</h1>
      Username:
      <input onChange={(e) => setUser(e.target.value)} type='text'></input>
      <br />
      Password:
      <input type='Password'></input>
      <br />
      <button onClick={() => register()}>Create Account</button>
    </div>
  )
}

export default Register
