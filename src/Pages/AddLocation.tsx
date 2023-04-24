import React, { useState } from 'react'
import { useLocalStorage } from '../lib/useLocalStorage'

const AddLocation = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const [locations, setLocations] = useLocalStorage('locations')

  const addNewLocation = () => {
    let tempLocations = locations() || {}
    tempLocations[Math.floor(Math.random() * 999999)] = { name: name, description: description }
    setLocations(tempLocations)
  }

  return (
    <div>
      <h1>Add New Location</h1>
      Name:
      <input onChange={(e) => setName(e.target.value)} type='text'></input>
      <br />
      Description:
      <textarea onChange={(e) => setDescription(e.target.value)}></textarea>
      <br />
      <button onClick={() => addNewLocation()}>Create!</button>
    </div>
  )
}

export default AddLocation
