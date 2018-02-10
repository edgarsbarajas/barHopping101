import React from 'react'
import '../styles/header.css'

const Header = () => {
  return(
    <header>
      <nav>
        <a
          href='https://www.eventbrite.com/organizer/packages/?origin=create&referrer=https%3A%2F%2Fwww.eventbrite.com%2F'>
          CREATE EVENT
        </a>
      </nav>
      <img src='logo.png' alt='logo' className='logo'/>
    </header>
  )
}

export default Header;
