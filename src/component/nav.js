import React, { useState } from 'react'
import './css/nav.css'
function Nav() {
  return (
    <div>
        <div className='navbar'>
            <ul className='navbarlist'>
                <li>Home</li>
                <li>Movie</li>
                <li>Trailers</li>
                <li>Upcoming Movie</li>
                <li>Signin</li>
            </ul>
        </div>
        <div className='searchbar'>
            <input type="search" placeholder='Search Your Fav...'></input>
        </div>
        </div>
  )
}

export default Nav