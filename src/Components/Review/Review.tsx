import React from 'react'
import { useLocalStorage } from '../../lib/useLocalStorage'
import './styles.css'

export const Review = ({ review }: any) => {
  const [reports, setReports] = useLocalStorage('reports')
  const [username] = useLocalStorage('username')

  const report = () => {
    let tempReports = reports() || []
    tempReports.push({ username: username(), review: review })
    setReports(tempReports)
  }
  return (
    <div className='Review'>
      {review.username}:<br />
      <b>{review.title}</b>
      <br />
      {review.body}
      <br />
      <a href='#' onClick={() => report()}>
        Report
      </a>
    </div>
  )
}
