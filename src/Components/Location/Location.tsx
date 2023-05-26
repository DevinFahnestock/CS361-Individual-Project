import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
const Location = ({ location, id }: any) => {
  return (
    <div className='Location'>
      <Link to={`/location/${id}`}>{location?.name}</Link>

      <div>Location: {location?.location}</div>
      <div>Length: {location?.length} miles</div>
      <div>Difficulty: {location?.difficulty}</div>

      <Link to={`/newreview/${id}`}>
        <button>New Review</button>
      </Link>
    </div>
  )
}

export default Location
