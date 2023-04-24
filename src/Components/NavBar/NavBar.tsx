import React from 'react'
import { Link } from 'react-router-dom'
import { useLocalStorage } from '../../lib/useLocalStorage'
import './styles.css'

const NavBar = ({ loggedIn }: any) => {
  const [username] = useLocalStorage('username')
  if (!loggedIn) {
    return <></>
  }
  return (
    <div className='NavBar'>
      <a href='/'>Home</a>
      <div>Welcome, {username()}!</div>
      <Link to='/myaccount'>My Account</Link>
    </div>
  )
}

export default NavBar
