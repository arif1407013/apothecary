import React from 'react'

const page = ({params}: {params: {id: string}}) => {
  return (
    <div>Only Members {params?.id}</div>
  )
}

export default page