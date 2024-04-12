import React from 'react'
import Seo from "../components/seo"

export default function index() {
  return (
    <div>
      <Seo title="Home" keywords={[`Home Page the Twelve`]} />
    <div className='banner'>
    <div className='container'>
      <p>🕛 the Twelve is a design and technology practice of Job Musembi & Faith Mwikali building contemporary African brands in the digital realm.<br/><br/>
          We’re a nimble, dynamic duo, embracing our small team size. We’re the  technologists
          that actually do the work, meaning your vision won’t get lost in translation across multiple points of contact.</p>

      <p>🌐 Services</p>
      <ul>
        <li>Website Design</li>
        <li>Interaction Design</li>
        <li>Frontend Development</li>
        <li>Backend Development</li>
        <li>Ecommerce Development</li>
        <li>Experimental Development</li>
      </ul> 

      <p>💡 Capabilities</p>
      <ul>
        <li>Marketing Websites</li>
        <li>Editorial Websites</li>
        <li>Shopify Websites</li>
        <li>3rd Party Integrations</li>
        <li>Sanity</li>
        <li>Wordpress</li>
      </ul> 

      <p>🗂️ Clients</p>
      <p>Saba Studios, Greenspoon, Faholo Chemicals, Playsupply, fromnothingnew.</p>

      <p>📩 Ready to work together?</p>
      <ul>
        <li>+254 111 203 301 / +254 796 472 672</li>
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
