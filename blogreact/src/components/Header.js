import * as Icon from 'react-bootstrap-icons';
import React, {useRef} from 'react';
export default function Header({loginUsername,loginPassword, postLogin}) {

  const unameRef=useRef();
  const passRef=useRef();
  return <div className="header">
      <h1>POST-ED</h1>
      <ul>
          <li><a href='/'><Icon.HouseDoorFill></Icon.HouseDoorFill></a></li>
          <li><Icon.InfoCircle></Icon.InfoCircle></li>
          <li><Icon.Chat></Icon.Chat></li>
      </ul>
      <form className="login" onSubmit={postLogin}>
        <div>
           
              <span><button className="btn btn-link"><a href='/signup'>Sign Up</a></button></span>
            
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
