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
          <li><a href='/'><Icon.HouseDoorFill></Icon.HouseDoorFill></a></li>
          <li><a href='/about'><Icon.InfoCircle></Icon.InfoCircle></a></li>
          <li><a href='/contact'><Icon.Chat></Icon.Chat></a></li>
      </ul>

      <span><button className="btn btn-link"><a href='/signup'>Sign Up</a></button></span>
      
      <form className="login" onSubmit={postLogin}>
        <div>          
              
            
              <input ref={unameRef} type="text" placeholder="Username" onChange={()=>{
                let username=unameRef.current.value
                loginUsername(username)
              }}></input>
              <input ref={passRef} type="password" placeholder="Password" onChange={()=>{
                let password=passRef.current.value
                loginPassword(password)
              }}></input>
              <button className="btn btn-dark">Log In</button>
            
        </div>
      </form>
  </div>;
}
