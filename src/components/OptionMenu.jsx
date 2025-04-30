import React from 'react'
import '../css/Option.css'

function OptionMenu() {
  return (
    <div className='option_container'>
        <div className='right_section'>
            <div className='Box'>
                <p>Tour Packages</p>
                <div>International</div>
                <button>search</button>
            </div>

            <div className='Box'>
                <p>Tour Packages</p>
                <div>Domestic</div>
                <button>search</button>
            </div>

            <div className='Box'>
                <p>Hotel Booking</p>
                <div>Country</div>
                <button>search</button>
            </div>

            <div className='Box'>
                <p>Visa Searches</p>
                <div>Country</div>
                <button>search</button>
            </div>
            
            <div className='Box'>
                <p>Events</p>
                <div>Activities</div>
                <button>search</button>
            </div>

       </div>
    </div>
  )
}

export default OptionMenu