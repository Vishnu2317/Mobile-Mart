import React, { useState } from 'react'
import './Login.css'


const  Login = ({onLogin}) => {

  const [email, setemail] = useState( );
  const [password, setpassword] = useState( );
  const [error, seterror] = useState( );

const handleLogin = () => {
  if (email === "vishnu@gmail.com" && password === "reddy") {
               onLogin();
          } else {
            seterror("Invalid username or password*");
          }
};
  return (
     <>
    <div className="login">
        <h1>Login</h1>
        <form id="form1" className="form1">
            <input id="email" type="email" placeholder="Enter mail id" required value={email}
            onChange={(e) => setemail(e.target.value)} />
            <p>Email:vishnu@gmail.com</p>
        <input id="psd" type="password" placeholder="password" required value={password}
            onChange={(e) => setpassword(e.target.value)}/>
            <p>Password:reddy</p>
        {/* <label className="reme">  
            <input id="reme" type="checkbox"/>
         Remember Me
        </label> */}
        </form>
        <button className="btn" onClick={handleLogin}>Submit</button>
        {error && <p className="error-message">{error}</p>}
    </div>
     </>
  )
}
export default Login
