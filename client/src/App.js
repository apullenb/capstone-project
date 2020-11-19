import React, {Component, useContext, Fragment, useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom' 
import Header from './Page Components/Header';
import Footer from './Page Components/Footer';
import Home from './Pages/Home';
import LoginForm from './Forms/LoginForm';
import NewJournalEntry from './Journal/NewJournalEntry';
import AllJournalEntries from './Journal/AllJournalEntries';
import AllEntryView from './DailyLog/AllEntryView';
import useLocalStorage from 'react-use-localstorage'
import Dashboard from './Pages/Dashboard';
import Register from './Forms/Register';
import LogNewEntry from './DailyLog/LogNewEntry'



 
const App = () => {

  
  useEffect(()=> {
    isAuthCheck();
  },[])
  
  const [isAuthenticated, setIsAuthenticated] =useState(false)
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean)
  }
  console.log(isAuthenticated)
 async function isAuthCheck() {
   try {
    const response = await fetch("http://localhost:8000/api/users/isverified", {
      method: 'GET',
      headers: {token: localStorage.token}
    });
    const parseRes = await response.json();
    parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
   } catch (err) {
     console.error(err.message)
   }
 }


 
  return (
    <Fragment>
      
      <Router>
    <div className="App">
    <Header />
    
    <Switch>
      <Route exact path='/login' render= {props =>
       !isAuthenticated ? ( <LoginForm {...props} setAuth={setAuth} />) : ( <Redirect to='/Dashboard' /> )} />
      <Route path='/register' render= {props => 
       !isAuthenticated ? ( <Register {...props} setAuth={setAuth} />) : (  <Redirect to='/login' /> )}  />
      <Route path='/Dashboard' render= {props => 
       isAuthenticated ? (<Dashboard {...props} setAuth={setAuth} /> ): (  <Redirect to='/login' /> )} />
      </Switch>
       <Route path='/alljournalentries' render = {props =>
       isAuthenticated ? ( <AllJournalEntries {...props} setAuth={setAuth} />) : ( <Redirect to='/login' /> )} />
      
      
        <Route path= '/AllEntryView' component= {AllEntryView} />
        <Route
               path='/NewJournalEntry' component= {NewJournalEntry}/>
        <Route
               path='/LogNewEntry' component= {LogNewEntry}/>
     
    <Route exact path= '/' component= {Home} />
    
    <Footer />
    
    </div>
    </Router>
    </Fragment>
  );
}


export default App;
