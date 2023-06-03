import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Location from '../Components/Location/Location'
import Comment from '../Components/Location/Comment'
import CreateComment from '../Components/Location/CreateComment'

export const LocationPage = () => {
  const { id } = useParams()

  const [location, setLocation] = useState<any>({})
  const [comments, setComments] = useState<any>([])

  const getData = async () => {
    const locationData = await fetch(`http://localhost:3001/trail/${id}`)
    const commentData = await fetch(`http://localhost:3001/comment/trail/${id}`)
    const json = await locationData.json()
    setLocation(json)
    setComments(await commentData.json())
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
      {comments.map((comment: any) => (
        <Comment key={comment._id} comment={comment} />
      ))}
      <CreateComment trailId={id} />
    </div>
  )
}
