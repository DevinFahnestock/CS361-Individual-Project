import React from 'react'

const Login = () => {
  const login = () => {
    //login
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
