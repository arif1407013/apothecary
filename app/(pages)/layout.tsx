import React from 'react'
import Header from '../_layout/header'
import Navigation from '../_layout/navigation'
import Footer from '../_layout/footer'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default layout