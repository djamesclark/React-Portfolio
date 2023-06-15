import React from 'react'
import ContactForm from './ContactForm'
import mia from '../images/Mia 1.png'

export default function Contact() {

  return (
    <div>
        <div>
            <img src={mia} />
        </div>
        <div><ContactForm /></div>
    </div>
    
  )
}
