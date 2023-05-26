import { useEffect, useState } from 'react'
import Location from '../Location/Location'

const Locations = () => {
  const [locations, setLocations] = useState<Array<any>>([])

  const getData = async () => {
    const locationData = await fetch('http://localhost:3001/trail')
    const json = await locationData.json()
    setLocations(json)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      {locations &&
        locations.map((location: any) => <Location key={location._id} id={location._id} location={location} />)}
    </div>
  )
}

export default Locations
