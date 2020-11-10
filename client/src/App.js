import React from 'react';
import { Route } from 'react-router-dom'
import Header from './Page Components/Header';
import Footer from './Page Components/Footer';
import Home from './Pages/Home';
import LoginForm from './Forms/LoginForm';
import NewJournalEntry from './Journal/NewJournalEntry';
import AllJournalEntries from './Journal/AllJournalEntries';


function App() {
  return (
    <div className="App">
    <Header />
    <Route exact path= '/' component= {Home} />
    <Route path= '/Login' component= {LoginForm} />
    <Route path= '/NewJournalEntry' component = {NewJournalEntry} />
    <Route path= '/AllJournalEntries' component= {AllJournalEntries} />
    <Footer />
    </div>
  );
}

export default App;
