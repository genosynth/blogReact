import React, {useEffect} from 'react';
import jwt from 'jwt-decode';
import Article from './Article'
import { useHistory, useNavigate } from 'react-router-dom';





function Articles({userArticles , setArticles}) {

    let getArticles = async ()=>  {
        //event.PreventDefault()
        const req = await fetch('http://localhost:4000/app/dashboard',{
            headers: {
              'x-axxess-token':localStorage.getItem('token'),
            },
          })
        const data = await req.json()

        if(data.user.articles){
        return setArticles(data.user.articles)
        }
      }

      
    //console.log(madonna())
    getArticles()

    return(
        
        userArticles.map(article => {

            return <Article key={article.name} article={article}/>                      

        })    


    ) 
    
   
       
     
}

export default Articles;
