import * as Icon from 'react-bootstrap-icons';
import React from 'react';
export default function loggedInHeader({isLoggedIn, logOut}) {

  
  
  return <div className="header">
      <h1>POST-ED</h1>
      <ul>
          <li><a href='/dashboard'><Icon.HouseDoorFill></Icon.HouseDoorFill></a></li>
          <li><Icon.InfoCircle></Icon.InfoCircle></li>
          <li><Icon.Chat></Icon.Chat></li>
      </ul>
      <span>Logged in as <span style={{fontWeight: "bold"}} >{isLoggedIn}</span><button onClick={()=>{logOut(false)}} className="btn btn-dark" >Log Out</button></span>
  </div>;
}
