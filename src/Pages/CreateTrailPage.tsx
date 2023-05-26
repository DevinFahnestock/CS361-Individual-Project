import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateTrailPage = () => {
  const nameRef = useRef<HTMLInputElement | null>(null)
  const locationRef = useRef<HTMLInputElement | null>(null)
  const lengthRef = useRef<HTMLInputElement | null>(null)
  const DifficultyRef = useRef<HTMLInputElement | null>(null)

  const navigate = useNavigate()
  const addNewTrail = (trail: { name: string; location: string; difficulty: string; length: string }) => {
    console.log(trail)
    fetch('http://localhost:3001/trail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(trail),
    }).then(async (res) => {
      const newId = (await res.json())._id
      navigate(`/location/${newId}`)
    })
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          addNewTrail({
            name: nameRef?.current?.value ?? '',
            location: locationRef?.current?.value ?? '',
            difficulty: DifficultyRef?.current?.value ?? '0',
            length: lengthRef?.current?.value ?? '0',
          })
        }}
      >
        <h1>Add New Location</h1>
        Name:
        <input type='text' name='name' ref={nameRef}></input>
        <br />
        Location:
        <input type='text' name='location' ref={locationRef}></input>
        <br />
        Difficulty:
        <input type='text' name='difficulty' ref={DifficultyRef}></input>
        <br />
        Length:
        <input type='text' name='length' ref={lengthRef}></input>
        <br />
        <button type='submit'>Create!</button>
      </form>
    </div>
  )
}

export default CreateTrailPage
