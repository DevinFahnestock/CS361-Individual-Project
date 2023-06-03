import React from 'react'

const Comment = ({ comment, reported }: any) => {
  const report = () => {
    fetch(`http://localhost:3001/report/${comment._id}`)
    alert('comment has been reported')
  }

  return (
    <div className='comment'>
      <h3>{comment.title}</h3>
      <div>{comment.content}</div>
      {!reported && <button onClick={() => report()}>Report This Comment</button>}
    </div>
  )
}

export default Comment
