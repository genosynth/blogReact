import * as Icon from 'react-bootstrap-icons';
import React, {useRef} from 'react';
import LoggedInHeader from './LoggedInHeader'
export default function Header({isLoggedIn, logOut,loginUsername,loginPassword, postLogin}) {

  const unameRef=useRef();
  const passRef=useRef();

  if (isLoggedIn){
    return <LoggedInHeader isLoggedIn={isLoggedIn} logOut={logOut}></LoggedInHeader>
  }

  
  
  return <div className="header">
      <h1>POST-ED</h1>
      <ul>
          <li><a href='/'><Icon.HouseDoor></Icon.HouseDoor></a></li>
          <li><a href='/about'><Icon.InfoCircle></Icon.InfoCircle></a></li>
          <li><a href='/contact'><Icon.Chat></Icon.Chat></a></li>
          <li><a href='/signup'><b>Sign Up</b></a></li>
         <form className="login" onSubmit={postLogin}>       
                
       
             
              <input size="10" ref={unameRef} type="text" placeholder="Username" onChange={()=>{
                let username=unameRef.current.value
                loginUsername(username)
              }}></input>
              <input size="10" ref={passRef} type="password" placeholder="Password" onChange={()=>{
                let password=passRef.current.value
                loginPassword(password)
              }}></input>
              <button className="btn-dark">Log In</button>
              
            
       
      </form>

      
     
      </ul>

     
    
  </div>;
}
