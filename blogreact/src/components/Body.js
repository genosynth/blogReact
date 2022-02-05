import DefaultPage from "./DefaultPage";
import SignUp from "./SignUp";
import {BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import Dashboard from "./Dashbord";
import About from "./About";
import Contact from "./Contact";

export default function Body({ changeUserName,changeFullName, changePassword, changeDOB, changeEmail, sendPost, isLoggedIn, postArticle, insertArticleName, insertArticleContent, userArticles, setArticles}) {

    
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
         <Route path="/dashboard" element={<Dashboard isLoggedIn={isLoggedIn} postArticle={postArticle} insertArticleName={insertArticleName} insertArticleContent={insertArticleContent} userArticles={userArticles} setArticles={setArticles}/>}/> 
         <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
         

        
       </Routes>
        </div>
        </Router>
        
        )
    

}
