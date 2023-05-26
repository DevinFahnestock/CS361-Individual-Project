import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Location from '../Components/Location/Location'
import { Review } from '../Components/Review/Review'
import { useLocalStorage } from '../lib/useLocalStorage'

export const LocationPage = () => {
  const { id } = useParams()

  const [location, setLocation] = useState<any>({})

  const getData = async () => {
    const locationData = await fetch(`http://localhost:3001/trail/${id}`)
    const json = await locationData.json()
    setLocation(json)
  }

  useEffect(() => {
    getData()
  }, [])

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
      {/* {locationReviews.map((review: any) => (
        <Review key={review} review={tempReviews[review]} />
      ))} */}
    </div>
  )
}
