import React, { useState } from 'react';
import {toast} from 'react-toastify';



function Register (props) {
    const [inputs, setInputs] = useState({
        username: '',
        password: '',
    })

    const {username, password} = inputs

    const onChange = (e) => 
        setInputs({...inputs, [e.target.name] : e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const body = {username, password}
            const response = await fetch('http://localhost:8000/api/users/register', {
                method: "POST", headers: {"Content-Type" : "application/json" }, body: JSON.stringify(body)
            })
            const parseRes = await response.json();
            if (parseRes.token) {
            localStorage.setItem('token', parseRes.token)
            props.setAuth(true)
            toast.success('Success! Logging into your new account..')
            } else {
                props.setAuth(false)
                console.log(parseRes)
                toast.error(parseRes.error)
            }
        }catch (err) {
            console.error(err.message)
        }
    }
return (
<div>
    <h1>Register</h1>
        <label> Username: 
             <p><input type= "text" name="username" 
             value= {username} onChange={e=> onChange(e)} 
             />
           </p> </label>
        <label> Password: 
             <p><input type= "password" name="password" 
            value= {password} onChange={e=> onChange(e)}
              />
            </p> </label> 
            <label> Confirm Password: 
            <p><input type= "password" name="confpass" />
            </p> </label> 
        <button onClick={onSubmit}>Create Account</button>
      </div>
)
}
export default Register;