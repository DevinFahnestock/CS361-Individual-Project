import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import './styles.css'

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
    <div className='addTrailForm'>
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
        <table>
          <tr>
            <td>Name</td>
            <td>
              <input type='text' name='name' ref={nameRef}></input>
            </td>
          </tr>

          <tr>
            <td>Location</td>
            <td>
              {' '}
              <input type='text' name='location' ref={locationRef}></input>
            </td>
          </tr>

          <tr>
            <td>Difficulty</td>
            <td>
              <input type='text' name='difficulty' ref={DifficultyRef}></input>
            </td>
          </tr>

          <tr>
            <td>Length</td>
            <td>
              <input type='text' name='length' ref={lengthRef}></input>
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <button type='submit'>Create!</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  )
}

export default CreateTrailPage
