import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Entry from './Entry'


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
        <h2>Your Journal Entries</h2>
        <Link to = {{pathname: '/NewJournalEntry', state: this.state.journal}}> <button style={{marginLeft:'20%'}}>Add New Journal Entry</button></Link>
        <h3>{this.state.text}</h3>
          { this.state.Journal.map((entry) => { 
      return <div style= {cardStyle} key= {entry.id}> <Entry journal={entry}/> </div>}
          )}
     
   
      
       </div> 
    );
    }
}
const cardStyle = {
  // display:'flex',
  // flexDirection:'column',
  //  margin: '2%'
}
  export default AllJournalEntries;