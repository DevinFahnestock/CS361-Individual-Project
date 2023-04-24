import React from 'react'
import { Link } from 'react-router-dom'
import { useLocalStorage } from '../lib/useLocalStorage'
import { Review } from './Review'

const Location = ({ location, id }: any) => {
  const [reviews] = useLocalStorage('reviews')

  const locationReviews: any = Object.keys(reviews).filter((ele) => locationReviews[ele].locationId === id)

  return (
    <div>
      Location:
      {location?.name}
      <br />
      {location?.description}
      <Link to={`/newreview/${id}`}>
        <input type='button'>New Review</input>
      </Link>
      {locationReviews && Object.keys(locationReviews).forEach((review) => <Review review={locationReviews[review]} />)}
    </div>
  )
}

export default Location
