import React, { Component } from 'react'
import RatingBox from '../Page Components/RatingBox'
import Entry from './Entry'


class AllEntryView extends Component {
              constructor(props) {
              super(props)
                this.state = {
                  dailyLog: []
                }
              }
    componentDidMount() {
      fetch('http://localhost:8000/api/activity',{ method: 'GET',
      headers: {token: localStorage.token}
    })
      .then(res => res.json(''))
      .then(entries => {
        this.setState({ dailyLog: entries         
            })
          })
    }
   
      
  
    render() {
    
      return (
        <div className="dailylog-entries">
          <RatingBox rate={this.state.dailyLog} />
          {this.state.dailyLog.map((entry) => {
            return <div key={entry.id}><Entry log= {entry}/></div>})}
        
      </div>
      )
  
  }
}

  export default AllEntryView;