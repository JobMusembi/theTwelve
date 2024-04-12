import * as React from 'react'

//Styles
import "../styles/App.scss"


const Layout = ({ children }) => {
  return (
    <div>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout