import React, {useState} from 'react';
import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import jwt from 'jwt-decode';


function App() {

  const [userArticles, updateUserArticles] = useState([]) //used to get articles when logged in
  function setArticles(inputs){
    updateUserArticles(inputs)
  }


  const [user, configApp] = useState({  //used to register a new user
    
    username:"",
    fullName:"",
    password:"",
    dob:"",
    email:""

})
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

const [login, updateLogin] = useState({ //used to log in an existent user
  username:"",
  password:""
})
function loginUsername(username){ 
  updateLogin({username:username,password:login.password})
}
function loginPassword(password){
  updateLogin({username:login.username,password:password})
}
  
const [isLoggedIn, changeLogInStatus] = useState(()=>{ //used to get the name of the logged in user
  const token = localStorage.getItem("token")
  if (token){
  const loggedUser = jwt(token)
  if(loggedUser){return loggedUser.username}
  else {
    localStorage.removeItem('token')
    return false}
  } else { return false}

})

const [article, updateArticle] = useState({name:"",content:""})// used to post a new article
function insertArticleName(articleName){updateArticle({name:articleName, content:article.content})}
function insertArticleContent(articleContent){updateArticle({name:article.name, content:articleContent})}

const logOut =()=>{ //logs out by removing token from local storage
  changeLogInStatus(false)
  localStorage.removeItem('token')
  window.location.href="/"
}
  

 
let signUp = (event)=>{
  event.preventDefault()
  const registered = user;

  axios.post('http://localhost:4000/app/sign', registered)
  .then((response) => {
    if(response.data.email){
    alert("Registered succesfully!")
     return window.location.href="/"
    //console.log(response)
    } else{ alert("Username and/or Email already in use! Please use another username and/or email.")}
  })
  
}

  let postLogin = (event) =>{
  event.preventDefault()

  const logged = login;

   axios.post('http://192.168.0.145:4000/app/login', logged)
  //.then(response => console.log(response.data))
  .then((response) =>{ 
    if (response.data.user){// true or false check
      localStorage.setItem('token', response.data.user)
      alert("Logged in succesfully!")
      window.location.href="/dashboard"
    } else {
      alert("Username and/or Password incorrect!")
  }
    console.log(response.data)
  })

}

let postArticle = async ()=>{
//event.preventDefault()
  let user = {
    username:isLoggedIn,
    articleName:article.name,
    articleContent:article.content,
    date:Date.now()
  }

  await axios.post('http://192.168.0.145:4000/app/article', user)
  .then(response => console.log("nigga"))

}



  return (

  
    <div className="App">
      
      <Header isLoggedIn={isLoggedIn} logOut={logOut} loginUsername={loginUsername} loginPassword={loginPassword} postLogin={postLogin}></Header>
      <Body 
      isLoggedIn={isLoggedIn}
      changeUserName={changeUserName} 
      changeFullName={changeFullName} 
      changePassword={changePassword} 
      changeDOB={changeDOB} 
      changeEmail={changeEmail}
      sendPost={signUp}
      postArticle={postArticle}
      insertArticleContent={insertArticleContent}
      insertArticleName={insertArticleName}
      userArticles={userArticles}
      setArticles={setArticles}>
      </Body>  
       
    </div>
  );
}

export default App;
