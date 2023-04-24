import React from 'react'

export const Review = ({ review }: any) => {
  return (
    <div className='Review'>
      {review.username}:<br />
      {review.title}
      <br />
      {review.body}
    </div>
  )
}
