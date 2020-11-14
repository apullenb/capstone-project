import React, {useContext} from 'react';
import { Route } from 'react-router-dom'
import Header from './Page Components/Header';
import Footer from './Page Components/Footer';
import Home from './Pages/Home';
import LoginForm from './Forms/LoginForm';
import NewJournalEntry from './Journal/NewJournalEntry';
import AllJournalEntries from './Journal/AllJournalEntries';
import AllEntryView from './DailyLog/AllEntryView';
import useLocalStorage from 'react-use-localstorage'



 export const UserLoginContext = React.createContext()
function App() {
  const [login, setLogin] = useLocalStorage("login");
  const loggedIn = {login: login, setLogin: setLogin}
  return (
    <div className="App">
    <Header />
    <UserLoginContext.Provider value= {loggedIn}>
    <Route exact path= '/' component= {Home} />
    <Route path= '/Login' component= {LoginForm} />
    <Route path= '/NewJournalEntry' component = {NewJournalEntry} />
    <Route path= '/AllJournalEntries' component= {AllJournalEntries} />
    <Route path= '/AllEntryView' component= {AllEntryView} />
    </UserLoginContext.Provider>
    <p><Footer /></p>
    </div>
  );
}


export default App;
