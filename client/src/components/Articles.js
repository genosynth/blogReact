import React, {useEffect} from 'react';
import jwt from 'jwt-decode';
import Article from './Article'



function Articles({userArticles , setArticles, isLoggedIn}) {

  let getAllArticles = async ()=>{ //gets all articles of all registered users
    const req = await fetch(process.env.REACT_APP_GET_ARTICLES)

    const data = await req.json()

    console.log(data.users)

    if(data.users){
      let allArticles = []
      data.users.forEach((user)=>{
        user.articles.forEach((article)=>{
         article.username = user.username
          allArticles.push(article)
        })
      })

      allArticles.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date);
      });
      console.log (allArticles)
      return setArticles(allArticles)
    }
  }



  let getArticles = async ()=>  { //gets logged in's user articles only
        //event.PreventDefault()
        const req = await fetch('http://192.168.0.145:4000/app/dashboard',{
            headers: {
              'x-axxess-token':localStorage.getItem('token'),
            },
          })
        const data = await req.json()

        if(data.user.articles){
        return setArticles(data.user.articles)
        }
  }

      useEffect(()=> {
        getAllArticles()
       //getArticles()
      }, [])
      
 

    return(
        
        userArticles.map(article => {

            return <Article key={article.date} article={article} isLoggedIn={isLoggedIn}/>                      

        })    


    ) 
    
   
       
     
}

export default Articles;
