import React from 'react'

const page = ({params}: {params: {id: string}}) => {
  return (
    <div>
      Details
      <div className='text-lg text-violet-700'>Member {params?.id}</div>
      <div className='text-lg text-purple-700'>Progress {params?.id}</div>
    </div>
  )
}

export default page