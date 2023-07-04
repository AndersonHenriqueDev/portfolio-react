import React from 'react'
import "./about.scss";

const About = () => {

  return (
    <div className='about-div' id='about'>
      <div className='about-text'>
        <h3>A bit about me</h3>
        <p>
          I am a Frontend developer who is passionate about developing <span>beautiful
          and joyful digital experiences. Besides Programming, I love music and travelling to beach</span><span className='dot'>.</span> 
        </p>
      </div>
      <div className='about-image'>
        <div>
          <img className='hidden' src="./assets/Perfilpretobranco 1.png" alt="image 1" />
        </div>
        <div className='div-two-image'>
          <img className='hidden' src="./assets/photo-3.png" alt="image 2" />
          <img className='hidden' src="./assets/photo-praia1.png" alt="image 3" />
        </div>
      </div>
      
      <div className='photo-carousel-mobile'>
        <img src="./assets/Perfilpretobranco 1.png" alt="image 1" />
        <img src="./assets/photo-3.png" alt="image 2" />
        <img src="./assets/photo-praia1.png" alt="image 3" />
      </div>
    </div>
  )
}

export default About;