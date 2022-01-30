import DefaultPage from "./DefaultPage";
import SignUp from "./SignUp";


export default function Body({changeUserName,changeFullName, changePassword, changeDOB, changeEmail, sendPost}) {

    
        return <div className="mainFeed">
        <SignUp
         changeUserName={changeUserName} 
         changeFullName={changeFullName}
         changePassword={changePassword} 
         changeDOB={changeDOB} 
         changeEmail={changeEmail}
         sendPost={sendPost}></SignUp>
        
        </div>
    

}
