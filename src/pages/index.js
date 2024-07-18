import React from 'react'
import Seo from "../components/seo"
import PassportPhotos from '../components/passportphotos';

export default function index() {
  return (
    <div>
      <Seo title="Home" keywords={[`Home Page the Twelve`]} />
    <div className='banner'>
    <div className='container'>
      <p>THE TWELVE is a <span className="circled">design</span> and <span className="circled">technology</span> practice building contemporary African brands in the digital realm.
        
          </p>

      <div className="services">
        <div className="column">
          <h4>Services :</h4>
          <ul>
            <li>Website Design</li>
            <li>Interaction Design</li>
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Ecommerce Development</li>
            <li>Experimental Development</li>
          </ul> 
        </div>
      <div className="column">
        <h4>Capabilities :</h4>
        <ul>
          <li>Marketing Websites</li>
          <li>Editorial Websites</li>
          <li>Shopify Websites</li>
          <li>3rd Party Integrations</li>
          <li>Sanity</li>
          <li>Wordpress</li>
        </ul> 
      </div>
      </div>

      <h4>Clients :</h4>
      <p>Saba Studios,<br/> Greenspoon,<br/> Playsupply,<br/> fromnothingnew.</p>

      <PassportPhotos />
      <div className='contact'>
      <h4>Let's talk</h4>
      <p>Want to start a project ? Join the Team ? Apply for an internship ? Drop a quick word ? Email us: <a href="mailto:thetwlv@gmail.com">thetwlv@gmail.com</a></p>
      </div>
      {/* <ul>
        <li>PHONE :<a href="tel:+254 776 267 001">+254 776 267 001</a>&nbsp;&nbsp;<a href="tel:+254 796 472 672">+254 796 472 672</a></li>
        <li>Email us: <a href="mailto:thetwlv@gmail.com">thetwlv@gmail.com</a></li><br/>
      </ul>  */}
      <footer className="footer">
      <h4>Social</h4>
      <a href="https://instagram.com/twelve.co.ke" target="_blank" rel="noopener noreferrer">Instagram</a>
      <a href="https://twitter.com/jointhetwelve" target="_blank" rel="noopener noreferrer">Twitter</a>
      </footer>

    </div>
    </div>
    </div>
  )
}

