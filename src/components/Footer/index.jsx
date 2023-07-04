import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <footer>
      <h2><span className='light-weight'>Get</span> <span>in Touch</span><span className='dot'>.</span></h2>
      <p>So that we can talk more about...</p>
      <div>
        <a target='blank' href="mailto:andersonofc23@gmail.com"><i className="fa-solid fa-envelope fa-2x"></i></a>
        <a target='blank' href="https://github.com/AndersonHenriqueDev"><i className="fa-brands fa-github fa-2x"></i></a>
        <a target='blank' href="https://www.linkedin.com/in/devandersonhenrique"><i className="fa-brands fa-linkedin-in fa-2x"></i></a>
        
      </div>
      <small>Made with ❣️ by <span>Anderson Henrique</span></small>
    </footer>
  )
}

export default Footer;