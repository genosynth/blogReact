import React from 'react';
import axios from 'axios'

function Article({article, isLoggedIn}) {

  let deletePost = async(event)=>{
    event.preventDefault()
    let check = window.confirm("Are you sure you want to delete this post?")
    if (check==false){return}
    
    const dataSent = {username:isLoggedIn, article:article};
  
    await axios.post('http://192.168.0.145:4000/app/deleteArticle', dataSent)
    .then((response) => {
      if(response.status){
      alert("Post Deleted Successfully!")
       return window.location.href="/dashboard"
      //console.log(response)
      } else{ alert("Post did not delete")}
    })
    
  }

  let style={textAlign: "right"}

  if (article.username===isLoggedIn){
    return <div className='box'>
      
      <h2>{article.name}</h2>
      <p>{article.content}</p>
      <span>{article.date}</span>
      <span style={style}>Posted by <b>{article.username}</b></span>
      <button onClick={deletePost}>Delete</button>
      
  </div>
  }

  return <div className='box'>
      
      <h2>{article.name}</h2>
      <p>{article.content}</p>
      <span>{article.date}</span>
      <span style={style}>Posted by <b>{article.username}</b></span>
      
  </div>
}

export default Article;
