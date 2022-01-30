import * as Icon from 'react-bootstrap-icons';

export default function Header({change}) {
  return <div className="header">
      <h1>POST-ED</h1>
      <ul>
          <li><Icon.HouseDoorFill></Icon.HouseDoorFill></li>
          <li><Icon.InfoCircle></Icon.InfoCircle></li>
          <li><Icon.Chat></Icon.Chat></li>
      </ul>
      <form className="login" >
        <div>
            <span><button onClick={()=>{change()}} className="btn btn-link">Sign Up</button></span>
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password" ></input>
            <button className="btn btn-dark">Log In</button>
        </div>
      </form>
  </div>;
}
