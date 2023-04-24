import React from 'react'
import { useLocalStorage } from '../../lib/useLocalStorage'
import Location from '../Location/Location'

const Locations = () => {
  const [getLocations] = useLocalStorage('locations')

  const locations = getLocations()

  return (
    <div>
      {locations &&
        Object.keys(locations).map((location: any) => (
          <Location key={location} id={location} location={locations[location]} />
        ))}
    </div>
  )
}

export default Locations
