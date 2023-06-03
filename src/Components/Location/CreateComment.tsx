import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateComment = ({ trailId }: any) => {
  const titleRef = useRef<HTMLInputElement | null>(null)
  const contentRef = useRef<HTMLInputElement | null>(null)

  const navigate = useNavigate()
  const addNewComment = (comment: { trail: String; title: String; content: String }) => {
    fetch('http://localhost:3001/comment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(comment),
    }).then(async (res) => {
      window.location.reload()
      //navigate(`/location/${trailId}`)
    })
  }

  return (
    <div className='addCommentForm'>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          addNewComment({
            trail: trailId,
            title: titleRef?.current?.value ?? '',
            content: contentRef?.current?.value ?? '0',
          })
        }}
      >
        <h2>Leave a Comment</h2>
        <table>
          <tr>
            <td>Title</td>
            <td>
              <input type='text' name='title' ref={titleRef}></input>
            </td>
          </tr>

          <tr>
            <td>Content</td>
            <td>
              <input type='text' name='content' ref={contentRef}></input>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type='submit'>Submit!</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  )
}

export default CreateComment
