import React from "react";
import { CiHome } from "react-icons/ci";
import '../css/footer.css'

function Footer() {
  return (
    <div className="bottom_container">

      <div className="bottom_box">
         <CiHome className="image_footer"/>
         <p>ACTIVITES</p>   
      </div>
      <div className="bottom_box">
         <CiHome className="image_footer"/>
         <p>HOTELS</p>
         <div></div>
      </div>
      <div className="bottom_box">
         <CiHome className="image_footer"/>
         <p>PACKAGES</p>
         <div></div>
      </div>
      <div className="bottom_box">
         <CiHome className="image_footer"/>
         <p>CAR / BIKES</p>
         <div></div>
      </div>
      <div className="bottom_box">
         <CiHome className="image_footer"/>
         <p>MERCHANDISE</p>
         <div></div>
      </div>
      <div className="bottom_box">
         <CiHome className="image_footer"/>
         <p>ABOUT US</p>
         <div></div>
      </div>

      


     

    </div>
  );
}

export default Footer;
