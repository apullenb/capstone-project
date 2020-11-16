import React, {useState} from 'react'
import {toast} from 'react-toastify';




function LoginForm(props) {
  
  
  const [formHandleUser, setformHandleUser] = useState('')
  const [formHandlePass, setformHandlePass] = useState('')


    const handleSubmit = async e => { 
      e.preventDefault();
    const newLogin = {username: formHandleUser, password: formHandlePass} 
    const loginRequest = { method: 'POST', headers: {'content-type': 'application/json', 'Accept': 'application/json'}, body: JSON.stringify(newLogin)}
    const response = await fetch('http://localhost:8000/api/users/login', loginRequest)
    
    const parseRes = await response.json()
    if (parseRes.token) {
      localStorage.setItem('token', parseRes.token)
    props.setAuth(true) 
    toast.success('Logged In Successfully') 
  } else {
    props.setAuth(false)
    toast.error(parseRes.error)
  }
  }
    return (
     <div>
       <h1>Login</h1>
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
  