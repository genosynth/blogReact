import React, { useEffect } from 'react';
import jwt from 'jwt-decode';

import { useHistory, useNavigate } from 'react-router-dom';
export default function Dashboard() {

  const navigate = useNavigate()

  async function accessPrivatePage(event){
    //event.PreventDefault()
    const req = await fetch('http://localhost:4000/app/dashboard',{
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



  return <div> accessed mother fucker</div>;
}
