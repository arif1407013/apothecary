import Input from '@/app/_components/input'
import React from 'react'

const template = ({children}: {
    children: React.ReactNode
}) => {
  return (
    <div>
        <Input label={'Re-rendered State'} id={'template'}></Input>
        {children}
    </div>
  )
}

export default template