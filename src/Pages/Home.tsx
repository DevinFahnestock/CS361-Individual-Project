import React from 'react'
import { Link } from 'react-router-dom'
import Locations from '../Components/Locations'

const Home = ({ loggedIn }: any) => {
  if (loggedIn) {
    return (
      <div>
        <h1>Home</h1>
        <Link to='/addlocation'>Create New Location</Link>
        <Locations />
      </div>
    )
  } else {
    return (
      <div>
        <Link to='/login'>Login</Link>
        <br />
        <Link to='/register'>Create Account</Link>
        <br />
      </div>
    )
  }
}

export default Home
