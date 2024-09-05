import { ContentClass } from '@/app/_models/content'
import Link from 'next/link'
import React from 'react'

const ControlComp = () => {
  let navs: ContentClass[] = [
    {
      id: 1,
      title: '1',
      description: <h2 className='font-bold border border-red-300 border-dotted'>Desc 1</h2>
    },
    {
      id: 2,
      title: '2',
      description: <h2 className='font-bold border border-red-300 border-dotted'>Desc 2</h2>
    },
    {
      id: 3,
      title: '3',
      description: <h2 className='font-bold border border-red-300 border-dotted'>Desc 3</h2>
    },
    {
      id: 4,
      title: '4',
      description: <h2 className='font-bold border border-red-300 border-dotted'>Desc 4</h2>
    }
  ]
  return (
    <div>
      Control Page
      {navs.map((tada: ContentClass) => (
        <div key={tada?.id} className='border-2 border-slate-300 p-2'>
          <span>{tada?.title}</span>
          {tada?.description}
          <Link href={`/gaming/${tada?.id}`}>link</Link>
        </div>
      ))}
    </div>
  )
}

export default ControlComp