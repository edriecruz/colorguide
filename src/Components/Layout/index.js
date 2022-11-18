import React from 'react'
import './index.scss'
import Header from '../Header'
import Magic from '../Magic'
import Support from '../Support'

const Layout = () => {
  return (
    <div className='container'>
      <Header />
      <Support /> 
      <Magic />
    </div>
  )
}

export default Layout