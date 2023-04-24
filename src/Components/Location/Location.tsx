import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
const Location = ({ location, id }: any) => {
  return (
    <div className='Location'>
      <Link to={`/location/${id}`}>{location?.name}</Link>

      <div>{location?.description}</div>

      <Link to={`/newreview/${id}`}>
        <button>New Review</button>
      </Link>
    </div>
  )
}

export default Location
