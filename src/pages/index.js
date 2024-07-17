import React from 'react'
import Seo from "../components/seo"

export default function index() {
  return (
    <div>
      <Seo title="Home" keywords={[`Home Page the Twelve`]} />
    <div className='banner'>
    <div className='container'>
      <p>THE TWELVE is a design and technology practice building contemporary African brands in the digital realm.
        
          </p>

      <h4>🌐 Services</h4>
      <ul>
        <li>Website Design</li>
        <li>Interaction Design</li>
        <li>Frontend Development</li>
        <li>Backend Development</li>
        <li>Ecommerce Development</li>
        <li>Experimental Development</li>
      </ul> 

      <h4>💡 Capabilities</h4>
      <ul>
        <li>Marketing Websites</li>
        <li>Editorial Websites</li>
        <li>Shopify Websites</li>
        <li>3rd Party Integrations</li>
        <li>Sanity</li>
        <li>Wordpress</li>
      </ul> 

      <h4>🗂️ Clients</h4>
      <p>Saba Studios, Greenspoon, Playsupply, fromnothingnew.</p>

      <h4>📩 Ready to work together?</h4>
      <ul>
        <li>+254 776 267 001 / +254 796 472 672</li>
        <li>thetwlv@gmail.com</li><br/>
        {/* <li>
          <a href="https://twitter.com/jointhetwelve" target="_blank" rel="noopener noreferrer">
          Instagram 
          </a>
        </li> */}
        <li>
          <a href="https://twitter.com/jointhetwelve" target="_blank" rel="noopener noreferrer">
          Twitter 
          </a>
        </li>
      </ul> 

    </div>
    </div>
    </div>
  )
}


// import * as React from "react"



// const IndexPage = () => {
//   return (
//     <main>
//       <h1>
//         Congratulations
//       </h1>
//     </main>
//   )
// }

// export default IndexPage

// export const Head = () => <title>Home Page</title>
