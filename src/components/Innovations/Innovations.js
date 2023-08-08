import React from 'react'
import Innodesk from './Inno-desk'
import Innophn from './Inno-phn'
import './Innovations.css'

export default function Innovations() {
  return (
    <section className='innovations-section'>
    <div className="deskk">
      <Innodesk/>
    </div>
    
    

    <div className='phonee'>
    <h3>My <span> Projects</span></h3>
      <div className='phone-tit'>
        <div className="phnn">
          <Innophn/>
        </div>
      </div>
    </div>
    </section>
  )
}
