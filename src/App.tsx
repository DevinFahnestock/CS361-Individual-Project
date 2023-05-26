import React from 'react'
import './App.css'

import Login from './Pages/Account/Login'
import { Routes, Route } from 'react-router-dom'
import Register from './Pages/Account/Register'
import MyAccount from './Pages/Account/MyAccount'
import Home from './Pages/Home/Home'
import NavBar from './Components/NavBar/NavBar'
import { useLocalStorage } from './lib/useLocalStorage'
import CreateTrailPage from './Pages/CreateTrailPage'
import { NewReview } from './Pages/NewReview/NewReview'
import { LocationPage } from './Pages/LocationPage'

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
        <Route path='/addlocation' element={<CreateTrailPage />} />
        <Route path='/location/:id' element={<LocationPage />} />
        <Route path='/newreview/:locationId' element={<NewReview />} />
      </Routes>
    </div>
  )
}

export default App
