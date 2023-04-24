import React from 'react'
import { Link } from 'react-router-dom'
import Locations from '../../Components/Locations/Locations'
import './styles.css'

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
      <div className='NoLogin'>
        <p>Creating an account allows you to save locations, leave reviews, and many other useful features!</p>
        <br />
        <Link to='/login'>Login</Link>
        <br />
        <Link to='/register'>Create Account</Link>
        <br />
      </div>
    )
  }
}

export default Home
