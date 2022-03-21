import * as Icon from 'react-bootstrap-icons';
import React from 'react';
export default function loggedInHeader({isLoggedIn, logOut}) {

  
  
  return <div className="header">
      <h1>POST-ED</h1>
      <ul>
          <li ><a href='/dashboard'><Icon.HouseDoor></Icon.HouseDoor><b>HOME</b></a></li>
          <li><a href='/about'><Icon.InfoCircle></Icon.InfoCircle><b>ABOUT</b></a></li>
          <li><a href='/contact'><Icon.Chat></Icon.Chat><b>CONTACT</b></a></li>
      </ul>
      <div style={{flexGrow: 5.9}}>
      
      <span>Logged in as <span style={{fontWeight: "bold"}} >{isLoggedIn}</span><button onClick={()=>{logOut(false)}} className="btn btn-dark" >Log Out</button></span>
      </div>
  </div>;
}
