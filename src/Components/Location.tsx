import React from 'react'

const Location = ({ location }: any) => {
  return (
    <div>
      Location:
      {location?.name}
      <br />
      {location?.description}
    </div>
  )
}

export default Location
