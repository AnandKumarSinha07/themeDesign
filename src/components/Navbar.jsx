import React from 'react'
import '../css/nav.css'
import { FaPhoneAlt } from "react-icons/fa";



function Navbar() {
  return (
    <div className='navbar_container'>
        <div className='nav_box'>
            <div className='nav_left'>  
                 <FaPhoneAlt/>
                <p>+91-8521608484</p>
            </div>

            <div className='nav_right'>
                 <p>Language |</p>
                 <p>Franchise |</p>
                 <p>Login </p>
            </div>
        </div>
    </div>
  )
}

export default Navbar