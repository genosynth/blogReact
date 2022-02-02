import DefaultPage from "./DefaultPage";
import SignUp from "./SignUp";
import {BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import Dashboard from "./Dashbord";


export default function Body({changeUserName,changeFullName, changePassword, changeDOB, changeEmail, sendPost}) {

    
        return (
        
        <Router>
        <div className="mainFeed">
        
        <Routes>

        <Route path="/"  element={<DefaultPage></DefaultPage>}/>
        <Route path="/signup"  element={<SignUp
         changeUserName={changeUserName} 
         changeFullName={changeFullName}
         changePassword={changePassword} 
         changeDOB={changeDOB} 
         changeEmail={changeEmail}
         sendPost={sendPost}></SignUp>}/>
         <Route path="/dashboard" element={<Dashboard/>}/> 
         

        
       </Routes>
        </div>
        </Router>
        
        )
    

}
