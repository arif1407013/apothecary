import React from 'react'

const page = ({params}: {params: {id: string}}) => {
  return (
    <div>Only Progress {params?.id}</div>
  )
}

export default page