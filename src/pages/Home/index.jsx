import React from 'react'
import "./home.scss";

const Home = () => {

  return (
    <main id='home'>
      <h1 className='hidden'>Hey, I'm Anderson Henrique, I'm a <span> developer</span> and turning ideas into success<span className='dot'>.</span></h1>
      <a href="#about"><i className="fa-solid fa-chevron-down"></i></a>
    </main>
  )
}

export default Home;