import React from 'react'



function LoginForm() {
    return (
     <form className="register">
        <label> Username: 
             <p><input type= "text" />
           </p> </label>
        <label> Password: 
             <p><input type= "text" />
            </p> </label> 
        <button>Login</button>
        </form>
    );
    }
  
  export default LoginForm;
  