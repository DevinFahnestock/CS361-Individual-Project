import React from 'react'
import { useParams } from 'react-router-dom'
import Location from '../Components/Location'

export const LocationPage = ({ location }: any) => {
  const { id } = useParams()
  return (
    <div>
      <Location id={id} location={location} />
    </div>
  )
}
