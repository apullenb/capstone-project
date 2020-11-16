import React, { Component } from 'react'
import Entry from './Entry'


class AllJournalEntries extends Component {
              constructor(props) {
              super(props)
                this.state = {
                  Journal: []
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
            
          })
    }

   
    render() {
    
    return (
      <div className="journal-entries">
          { this.state.Journal.map((entry) => { 
      return <div key= {entry.id}> <Entry journal={entry} /></div>}) }
      </div>
      
    );
    }
}

  export default AllJournalEntries;