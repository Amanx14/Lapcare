import React from 'react'
import img from '../images/logo.jpg'

function Header() {
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <img src={img} alt="" />
        </div>
        <h1>LAPCARE.</h1>
      </div>
      <hr />
    </header>
  )
}

export default Header
