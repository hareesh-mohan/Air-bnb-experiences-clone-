import React from 'react'
import hero from '../images/imgs.png'
function Hero() {
  return (
    <section className='hero'>
        <img src={hero} className='hero--photo'></img>
        <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--header">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>

    </section>
  )
}

export default Hero
