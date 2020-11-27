import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Entry from './Entry'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class AllJournalEntries extends Component {
              constructor(props) {
              super(props)
                this.state = {
                  Journal: [],
                  text: ''
                } 
              }
              
    componentDidMount() {
      
      fetch('http://localhost:8000/api/journal',{ method: 'GET',
      headers: {token: localStorage.token}
    })
      .then(res => res.json())
      .then(entries => {
        this.setState({ Journal: entries         
            })
            if (this.state.Journal.length == 0 ) {
              this.setState({text : 'No Entries Yet. Please add New Entry'}) 
            }
          })
    }
   
   
    render() {
     
    return (
      <div className="journal-entries">
        <Link to = {{pathname: '/NewJournalEntry', state: this.state.journal}}> <button style={{marginLeft:'20%'}}><FontAwesomeIcon icon="plus" style={{color: ''}} /> {''}Add New Journal Entry</button></Link>
        <h3>{this.state.text}</h3>
          { this.state.Journal.map((entry) => { 
      return <div style= {cardStyle} key= {entry.id}> <Entry journal={entry}/> </div>}
          )}
     
   
      
       </div> 
    );
    }
}
const cardStyle = {
  backgroundColor:'#01b8d8',
  marginLeft:'18px',
  paddingLeft:'5px',
  paddingRight:'5px',
  paddingTop:'0px',
}
  export default AllJournalEntries;