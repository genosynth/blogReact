import React, {useState} from 'react';
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

  let editPost = async(event)=>{
    //event.preventDefault()
    //article.name = "funny"
    document.getElementById(article.date).innerHTML=`<input id="input${article.date}" placeholder=${article.name} required minLength="3"></input>`
    document.getElementById(`content${article.date}`).innerHTML=`<textarea id="inputContent${article.date}" placeholder=${article.content} required minLength="3"></textarea>`
    //document.getElementById(`btn${article.date}`).innerText=`Save`
    let newBtn = document.createElement("button")
    newBtn.innerText = "Save"
    document.getElementById(`btn${article.date}`).style="visibility:hidden" // hides Edit button 
    document.getElementById(`form${article.date}`).appendChild(newBtn) // adds Save button to the DOM
    document.getElementById(`form${article.date}`).addEventListener("submit", ()=>{
      submitEdit()
      
    })
    //return <div>fucker</div>
  }

  let submitEdit = async (event)=>{
    event.preventDefault()
    let updatedName = document.getElementById(`input${article.date}`).value
    let updatedContent = document.getElementById(`inputContent${article.date}`).value
      let editInfo = {
        username:isLoggedIn,
        articleName:updatedName,
        articleContent:updatedContent,
        id:article._id
      }
    alert("Post has been edited!")
      await axios.post('http://192.168.0.145:4000/app/editArticle', editInfo)
      .then(window.location.href="/dashboard")
      
       
    }

    const [newArticleInfo, updateArticleInfo] = useState()

  /*useEffect(() => {
    alert("effected!");
  },[article]); */
  
  let style={textAlign: "right"}

  if (article.username===isLoggedIn){
    return <div className='box'>

       <form onSubmit={submitEdit} id={`form${article.date}`}>
      <h2 id={article.date}>{article.name}</h2>
      <p  id={`content${article.date}`}>{article.content}</p>
      <span>{article.date}</span>
    
      <button onClick={deletePost}>Delete</button>
      <button id={`btn${article.date}`} onClick={editPost}>Edit</button>
      </form>
      <span style={style}>Posted by <b>{article.username}</b></span>
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
