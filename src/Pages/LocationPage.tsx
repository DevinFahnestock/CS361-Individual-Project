import React from 'react'
import { useParams } from 'react-router-dom'
import Location from '../Components/Location/Location'
import { Review } from '../Components/Review/Review'
import { useLocalStorage } from '../lib/useLocalStorage'

export const LocationPage = () => {
  const { id } = useParams()
  const [locations] = useLocalStorage('locations')
  const [reviews] = useLocalStorage('reviews')

  const tempLocations = locations()
  const location = tempLocations[Object.keys(tempLocations).find((ele) => ele === id) || '']

  const tempReviews = reviews()

  const locationReviews: any = Object.keys(tempReviews).filter((ele) => tempReviews[ele].locationId === id) || []

  locationReviews.forEach((review: any) => console.log(review, tempReviews[review]))
  if (!location) {
    return (
      <div>
        <h1>404: Location not found</h1>
      </div>
    )
  }

  return (
    <div>
      <Location id={id} location={location} />
      {locationReviews.map((review: any) => (
        <Review key={review} review={tempReviews[review]} />
      ))}
    </div>
  )
}
