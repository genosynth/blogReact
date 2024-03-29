import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

function Article({article, isLoggedIn}) {

  

  let deletePost = async(event)=>{
    event.preventDefault()
    let check = window.confirm("Are you sure you want to delete this post?")
    if (check==false){return}
    
    const dataSent = {username:isLoggedIn, article:article};
  
    await axios.post(process.env.REACT_APP_DELETE_ARTICLE, dataSent)
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
    document.getElementById(article.date).innerHTML=`<input id="input${article.date}" value=${article.name} required minLength="3"></input>`
    document.getElementById(`content${article.date}`).innerHTML=`<textarea id="inputContent${article.date}" placeholder="${article.content}" required minLength="3"></textarea>`
    //document.getElementById(`btn${article.date}`).innerText=`Save`
    let newBtn = document.createElement("Button")
    newBtn.classList.add(`btn-success`)
    newBtn.innerText = "Save"    
    document.getElementById(`btn${article.date}`).remove() //removes edit button
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
      await axios.post(process.env.REACT_APP_EDIT_ARTICLE, editInfo)
      .then(window.location.href="/dashboard")
      
       
    }

    const [newArticleInfo, updateArticleInfo] = useState()

  /*useEffect(() => {
    alert("effected!");
  },[article]); */
  
  let style={textAlign: "right"}

  if (article.username===isLoggedIn){
    return <div className='box-user' >

       <form onSubmit={submitEdit} id={`form${article.date}`}>
      <h2 id={article.date}>{article.name}</h2>
      <p  id={`content${article.date}`}>{article.content}</p>
      <span>{article.date}</span>
    
      <Button className="btn-dark" onClick={deletePost}>Delete</Button>
      <Button className="btn-secondary" id={`btn${article.date}`} onClick={editPost}>Edit</Button>
      </form>
      <span style={style}>Posted by <b>{article.username}</b></span>
  </div>
  }

  return <div className='box-article'>
     
      <h2>{article.name}</h2>
      <p>{article.content}</p>
      <span>{article.date}</span>
      <span style={style}>Posted by <b>{article.username}</b></span>
      
  </div>
}

export default Article;
