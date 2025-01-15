import React from 'react';
import './header.css';
import Logo from './Logo';
import Searchbar from './Searchbar';
import Navbar from './Navbar';

const Header = () => {
  return (
    <>
      <header id='header' className='header fixed-top d-flex align-items-center'>
        {/* logo */}
        <Logo/>
        {/* searchbar */}
        <Searchbar/>
        {/* nav  */}
        <Navbar/>
      </header>
    </>
  )
}

export default Header
