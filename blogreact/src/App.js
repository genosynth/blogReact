import React, {useState} from 'react';
import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'


function App() {

  const [user, configApp] = useState({ //stateApp was used before to try shit
    
    username:"",
    fullName:"",
    password:"",
    dob:"",
    email:""

})
  //console.log(user)
  
  function changeUserName(uname) {
    
     let changedUser = {
       username:uname,
       fullName:user.fullName,    
       password:user.password,
       dob:user.dob,
       email:user.email
      }
    
    configApp(changedUser)
  }

  function changeFullName(fname) {
    
    let changedUser = {
      username:user.username,
      fullName:fname,    
      password:user.password,
      dob:user.dob,
      email:user.email
     }
   
   configApp(changedUser)
 }

 function changePassword(password) {
    
  let changedUser = {
    username:user.username,
    fullName:user.fullName,    
    password:password,
    dob:user.dob,
    email:user.email
   }
 
 configApp(changedUser)
}

function changeDOB(dateOfBirth) {
    
  let changedUser = {
    username:user.username,
    fullName:user.fullName,    
    password:user.password,
    dob:dateOfBirth,
    email:user.email
   }
 
 configApp(changedUser)
}

function changeEmail(email) {
    
  let changedUser = {
    username:user.username,
    fullName:user.fullName,    
    password:user.password,
    dob:user.dob,
    email:email
   }
 
 configApp(changedUser)
}
 
function sendPost(){
  const registered = user;

  axios.post('http://localhost:4000/app/sign', registered)
  .then(response => console.log(response.data))
}
   
  return (
    <div className="App">
      <Header></Header>
      <Body 
      changeUserName={changeUserName} 
      changeFullName={changeFullName} 
      changePassword={changePassword} 
      changeDOB={changeDOB} 
      changeEmail={changeEmail}
      sendPost={sendPost}></Body>      
    </div>
  );
}

export default App;
