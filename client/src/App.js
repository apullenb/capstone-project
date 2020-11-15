import React, {useContext, Fragment, useState} from 'react';
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



 
function App() {

  const [isAuthenticated, setIsAuthenticated] =useState(false)

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean)
  }

  return (
    <Fragment>
      <Router>
    <div className="App">
    <Header />
    <Switch>
      <Route exact path='/login' render= {props =>
       !isAuthenticated ? ( <LoginForm {...props} setAuth={setAuth} />) : ( <Redirect to='/dashboard' /> )} />
      <Route exact path='/register' render= {props => 
       !isAuthenticated ? ( <Register {...props} setAuth={setAuth} />) : (  <Redirect to='/login' /> )}  />
      <Route exact path='/dashboard' render= {props => 
       isAuthenticated ? (<Dashboard {...props} setAuth={setAuth} /> ): (  <Redirect to='/login' /> )} />
      </Switch>

    
    
    <Route exact path= '/' component= {Home} />
    <Route path= '/NewJournalEntry' component = {NewJournalEntry} />
    <Route path= '/AllJournalEntries' component= {AllJournalEntries} />
    <Route path= '/AllEntryView' component= {AllEntryView} />
    
    <Footer />
    
    </div>
    </Router>
    </Fragment>
  );
}


export default App;
