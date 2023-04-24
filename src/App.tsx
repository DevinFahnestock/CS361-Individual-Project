import React from 'react'
import './App.css'

import Login from './Pages/Account/Login'
import { Routes, Route } from 'react-router-dom'
import Register from './Pages/Account/Register'
import MyAccount from './Pages/Account/MyAccount'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import { useLocalStorage } from './lib/useLocalStorage'
import AddLocation from './Pages/AddLocation'

function App() {
  const [username] = useLocalStorage('username')

  const loggedIn = () => {
    return username() !== null
  }

  return (
    <div className='App'>
      <NavBar loggedIn={loggedIn()} />
      <Routes>
        <Route path='/' element={<Home loggedIn={loggedIn()} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/myaccount' element={<MyAccount />} />
        <Route path='/addlocation' element={<AddLocation />} />
      </Routes>
    </div>
  )
}

export default App
