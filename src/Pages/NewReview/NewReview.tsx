import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useLocalStorage } from '../../lib/useLocalStorage'

export const NewReview = () => {
  const { locationId } = useParams()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [reviews, setReviews] = useLocalStorage('reviews')
  const navigate = useNavigate()

  const [username] = useLocalStorage('username')

  const addNewReview = () => {
    let tempReviews = reviews() || {}
    tempReviews[Math.floor(Math.random() * 999999)] = {
      locationId: locationId,
      username: username(),
      title: title,
      body: body,
    }
    setReviews(tempReviews)
    navigate(`/location/${locationId}`)
  }

  return (
    <div>
      <h1>NewReview</h1>
      Title:
      <input onChange={(e) => setTitle(e.target.value)} type='text'></input>
      <br />
      Body:
      <textarea onChange={(e) => setBody(e.target.value)}></textarea>
      <br />
      <button onClick={() => addNewReview()}>Create!</button>
    </div>
  )
}
