import React, { useEffect, useState } from 'react'
import Comment from '../../Components/Location/Comment'

const Reports = () => {
  const [reports, setReports] = useState([])

  const getReports = async () => {
    const data = await fetch(`http://localhost:3001/reported/`)
    setReports(await data.json())
  }

  useEffect(() => {
    getReports()
  }, [])

  return (
    <div>
      Reports:
      {reports.map((report: any) => (
        <Comment key={report._id} reported={true} comment={report} />
      ))}
    </div>
  )
}

export default Reports
