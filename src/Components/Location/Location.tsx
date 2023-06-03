import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
const Location = ({ location, id }: any) => {
  return (
    <div className='Location'>
      <Link to={`/location/${id}`}>
        <h1>{location?.name}</h1>
      </Link>

      <div>Location: {location?.location}</div>
      <div>Length: {location?.length} miles</div>
      <div>Difficulty: {location?.difficulty}</div>
    </div>
  )
}

export default Location
