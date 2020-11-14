import React, {useContext, useState} from 'react'
import {UserLoginContext} from '../App'



function LoginForm() {
  const loggedIn=useContext(UserLoginContext)
  
  const [formHandleUser, setformHandleUser] = useState('')
  const [formHandlePass, setformHandlePass] = useState('')


  function handleSubmit(){
    const newLogin = {username: formHandleUser, password: formHandlePass} 
    const loginRequest = { method: 'POST', headers: {'content-type': 'application/json', 'Accept': 'application/json'}, body: JSON.stringify(newLogin)}
    fetch('http://localhost:8000/api/users/login', loginRequest)
    .then(res =>
      (!res.ok)
    ? res.json().then(e => Promise.reject(e))
    : res.json() 
)
      loggedIn.setLogin(newLogin)
    
  }
    return (
     <div>
        <label> Username: 
             <p><input type= "text" name="user" value= {formHandleUser} onChange={e=> setformHandleUser(e.target.value)} />
           </p> </label>
        <label> Password: 
             <p><input type= "text" name="pass" value= {formHandlePass} onChange={e=> setformHandlePass(e.target.value)} />
            </p> </label> 
        <button onClick={handleSubmit}>Login</button>
        </div>

    );
    }
  
  export default LoginForm;
  