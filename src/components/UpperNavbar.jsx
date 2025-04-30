import React from 'react'
import '../css/navBottom.css'
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";

function UpperNavbar() {
  return (
    <div className='Bottom_navbar'>
         <div className='navbar_left'>
             <img src='https://chhuttiyan.com/static/media/logo2.5cae1909680f1073348b.png' alt='Logo'/>
             <h1>Chhuttiyan.Com</h1>
         </div>

         <div className='navbar_right'>
             <ul className='list_item'>
                <li>Home</li>
                <li>Tour Packages<span><IoIosArrowDropdown/></span></li>
                <li>Hotels <span><IoIosArrowDropdown/></span></li>
                <li>List Your Buisness <span><IoIosArrowDropdown/></span></li>
                <li>Merchandise</li>
                <li>Carrer</li>
                <CiSearch className='search_icon'/>
             </ul>
         </div>
    </div>
  )
}

export default UpperNavbar