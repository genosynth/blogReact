import React, {useRef} from "react";

export default function SignUp({changeUserName, changeFullName, changePassword, changeDOB, changeEmail , sendPost}) {

  const unameRef=useRef();
  const nameRef=useRef();
  const passRef=useRef();
  const dobRef=useRef();
  const emailRef=useRef();

  return <div>
      <form onSubmit={()=>{sendPost()}} className="register">
          <label>Username : </label>
          <input ref={unameRef} type="text" onChange={()=> {
            let uname = unameRef.current.value
            changeUserName(uname)

            }}></input>
          <label>Full Name : </label>
          <input ref={nameRef} type="text" onChange={()=> {
            let name = nameRef.current.value
            changeFullName(name)

            }}></input>
         
          <label>Password : </label>
          <input ref={passRef} type="password" onChange={()=> {
            let pass = passRef.current.value
            changePassword(pass)

            }}></input>
          <label>Date of birth : </label>
          <input ref={dobRef} type="date" onChange={()=> {
            let dob = dobRef.current.value
            changeDOB(dob)

            }}></input>
          <label>Email : </label>
          <input ref={emailRef} type="email" onChange={()=> {
            let email = emailRef.current.value
            changeEmail(email)

            }}></input>
          <button type="submit" className="btn btn-primary">Register</button>
      </form>
  </div>;
}
