import React from 'react'
import Seo from "../components/seo"

export default function index() {
  return (
    <div>
      <Seo title="Home" keywords={[`Home Page the Twelve`]} />
      <div className='landing'> 
        <div className='landingText'>
          <p>THE SOCIALIST SQUAD</p>
          <p>ANARCHISTS WITH ATTITUDE</p>
          <p>THE DISRUPTERS</p>
          <p>THE 12</p>
        </div>
        <footer className="footer">
          <a href="https://instagram.com/thetwelve.co.ke" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com/jointhetwelve" target="_blank" rel="noopener noreferrer">Twitter</a>
        </footer>
      </div>
    </div>
  )
}

