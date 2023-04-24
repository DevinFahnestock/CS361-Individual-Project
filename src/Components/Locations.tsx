import React from 'react'
import { useLocalStorage } from '../lib/useLocalStorage'
import Location from './Location'

const Locations = () => {
  const [getLocations] = useLocalStorage('locations')

  const locations = getLocations()

  return (
    <div>
      {Object.keys(locations).map((location: any) => (
        <Location location={locations[location]} />
      ))}
    </div>
  )
}

export default Locations
