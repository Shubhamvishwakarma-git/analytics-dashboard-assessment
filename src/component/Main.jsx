import React from 'react'
import './main.css'
import Pagetitle from './Pagetitle'
import Dashboard from './Dashboard'

const Main = () => {
  return (
    <>
      <main id='main' className='main'>
        <Pagetitle page="Dashboard"/>
        <Dashboard/>
      </main>
    </>
  )
}

export default Main
