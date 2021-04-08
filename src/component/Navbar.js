import React from 'react'
import {Link,NavLink, withRouter } from 'react-router-dom'


const Navbar  = (props) => {
    //setTimeout(() =>{
       // props.history.push('about')
   //},2000)
    return(
<nav className="nav-wrapper red darken-3">
      <div className="container">
          <a  className="brand-logo">pokietimes</a>
          <ul className="right">
              <li><Link to="/home">Home</Link></li>
              <li><NavLink to="/About">About</NavLink></li>
           
          </ul>
      </div>
  </nav>
    )
  
}

export default  withRouter(Navbar)