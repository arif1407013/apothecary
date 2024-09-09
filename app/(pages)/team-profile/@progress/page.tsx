import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      Progress
      <hr />
      <Link href={'/team-profile/1'}>Progress 1</Link>
      <Link href={'/team-profile/2'}>Progress 2</Link>
      <Link href={'/team-profile/3'}>Progress 3</Link>
      <Link href={'/team-profile/4'}>Progress 4</Link>
    </div>
  )
}

export default page