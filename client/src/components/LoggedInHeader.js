import * as Icon from 'react-bootstrap-icons';
import React from 'react';
export default function loggedInHeader({isLoggedIn, logOut}) {

  
  
  return <div className="header">
    
      <h1>POST-ED</h1>
      
        
        <ul>
            <li ><a href='/dashboard'><b>HOME</b></a></li>
            <li><a href='/about'><b>ABOUT</b></a></li>
            <li><a href='/contact'><b>CONTACT</b></a></li>
        </ul>
             
      
      <span >Logged in as<span style={{fontWeight: "bold"}} >{isLoggedIn} </span><button onClick={()=>{logOut(false)}} className="btn-dark" >Log Out</button></span>
      
  </div>;
}
