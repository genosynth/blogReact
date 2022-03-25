import React, { useEffect, useRef } from 'react';
import jwt from 'jwt-decode';
import Articles from "./Articles";

import { useHistory, useNavigate } from 'react-router-dom';
export default function Dashboard({isLoggedIn, postArticle, insertArticleName, insertArticleContent, userArticles, setArticles}) {
  const aName=useRef();//article name 
  const aContent=useRef();// article content

  const navigate = useNavigate()

  async function accessPrivatePage(event){
    //event.PreventDefault()
    const req = await fetch('http://192.168.0.145:4000/app/dashboard',{
      headers: {
        'x-axxess-token':localStorage.getItem('token'),
      },
    })
    const data = await req.json()
    console.log(data)
  }
  useEffect(()=> {
    const token = localStorage.getItem('token')
    
    if (token){
      
      console.log(jwt(token))
      const user = jwt(token)
      //console.log("ah")
      if (user.username){
        accessPrivatePage()
        
      } else {
        localStorage.removeItem('token')
        //navigate.replace('/');
        navigate("/", { replace: true });
        //window.location.href = '/'
      }
    }
    else {navigate("/")}
  }, [])



  return <div className='box' style={{marginRight:"20%"}}> 
    

      <h1 style={{textAlign:'center'}}>{isLoggedIn}'s wall</h1>      
      

      <form onSubmit={()=>{postArticle()}} className='box'>
      <input ref={aName} type="text" required  minLength="3" placeholder='Enter Name of Post/Blog/Article' onChange={()=>{
        let articleName = aName.current.value
        insertArticleName(articleName)
      }}></input>
      <textarea ref={aContent} rows="4" cols="50" placeholder='Start writing!' required onChange={()=>{
        let articleContent = aContent.current.value
        insertArticleContent(articleContent)
      }}>    
      </textarea>
      <button type="submit" className='btn btn-primary'>Post</button>

    </form>

    <Articles userArticles={userArticles} setArticles={setArticles} isLoggedIn={isLoggedIn}></Articles>

  </div>;
}
