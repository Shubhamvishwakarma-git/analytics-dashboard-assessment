import React from 'react'
import './nav.css'
import Navavatar from './Navavatar'

const Navbar = () => {
  return (
    <>
    <nav className='header-nav ms-auto'>
        <ul className='d-flex align-items-center'>
            <Navavatar/>
        </ul>
          
    </nav>
    </>
  )
}

export default Navbar
