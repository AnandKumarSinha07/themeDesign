import React from 'react'
import OptionMenu from './OptionMenu'
import './home.css'
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";


const page=[1,2,3,4,5];

function Home() {
  return (
    <div className='home_component'>
     
      <div>
           <div className='icon_container'>
               <img src='https://chhuttiyan.com/static/media/logo2.5cae1909680f1073348b.png' alt='logo  ' width={8}/>
               <CiFacebook/>
               <CiYoutube/>
               <FaInstagram/>
               <CiTwitter/>
           </div>
      </div>
      
       <div className='left_section'>
           <h1>London Explore Uk Sentosa</h1>
           <button>Book Now</button>
       </div>
       <OptionMenu/>    

       <div className='page_'>
         {page.map((item,index)=>{
          return(
             <p key={index}>{item}</p>
          )
         })}
       </div>

         
    </div>
  )
}

export default Home