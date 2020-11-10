import React, { Component } from 'react'
import Entry from './Entry'





class AllJournalEntries extends Component {
     Journal = [
        {   id: '1',
            mood: 'happy',
            title: 'Sample 1',
            content: 'This is an example of a journal entry and here is the contents'
    
        },
        {   id: '2',
            mood: 'angry',
            title: 'Sample 2',
            content: 'This is an example of a journal entry and here is the contents'
    
        },
        {   id: '3',
            mood: 'frustrated',
            title: 'Sample 3',
            content: 'This is an example of a journal entry and here is the contents'
    
        }
    ]

    render() {
       const displayEntries = this.Journal.map((entry) => { 
           return <li key= {entry.id}> <Entry journal={entry} /></li>})
    return (
      <div className="journal-entries">
          {displayEntries}
      </div>
    );
  }
}

  export default AllJournalEntries;