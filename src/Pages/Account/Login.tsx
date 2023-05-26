import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const login = () => {
    //login
    navigate('/')
  }

  return (
    <div>
      <h1>Login</h1>
      Username:
      <input type='text'></input>
      <br />
      Password:
      <input type='Password'></input>
      <br />
      <button onClick={() => login()}>Login</button>
    </div>
  )
}

export default Login
