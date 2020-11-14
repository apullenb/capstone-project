import React from 'react';
import LoginForm from '../Forms/LoginForm';
import './Pages.css'


function Home() {
  return (
    <div className="page">
        
        <section>
        <header>
            <h3>Track Daily Activities & Medicine</h3>
        </header>
        <p>[<em>placeholder for screenshot of daily entry interface</em>]</p>
        <p>Explanation of this feature.</p>
      </section>
      <section>
        <header>
            <h3>Rate Yourself</h3>
        </header>
        <p>Explanation of this feature</p>
      </section>
      <section>
        <header>
            <h3>Track Your Mental Health</h3>
        </header>
        <p>[<em>placeholder for screenshot of this feature</em>]</p>
        <p>Explanation of this feature..</p>
      </section>
      <section>
        <header>
            <h3>Get it all out</h3>
        </header>
        <p>[<em>placeholder for screenshot of this feature</em>]</p>
        <p>Explanation of this journal feature..</p>
      </section>
      <section>
        <header>
            <h3>Start Feeling Great Now!</h3>
        </header>
        </section>
        <article>
        <section className="left">
        <h5>Create An Account:</h5>
        <form className="register">
        <label> Username: 
             <p><input type= "text" />
           </p> </label>
        <label> Password: 
             <p><input type= "text" />
            </p> </label>
         <label> Confirm Password: 
         <p>  <input type= "text" />
        </p> </label>      
        <button>Submit</button>
        </form>
        </section>
        <section className="right">
          <h5>Already Have An Account?</h5>
          Login:
          <LoginForm />
        </section>
        </article>
      </div>
  );
  }

export default Home;