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
      fetch('http://localhost:8000/journal-entries',{ method: 'GET'})
      .then(res => res.json())
      .then(entries => {
        this.setState({ Journal: entries         
            })
            console.log(this.state.Journal)
          })
    }
          
    render() {
       const displayEntries = this.state.Journal.map((entry) => { 
           return <li key= {entry.id}> <Entry journal={entry} /></li>})
    return (
      <div className="journal-entries">
          {displayEntries}
      </div>
    );
  }
}

  export default AllJournalEntries;