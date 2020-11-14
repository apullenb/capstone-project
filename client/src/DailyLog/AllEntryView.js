import React, { Component } from 'react'
import RatingBox from '../Page Components/RatingBox'


class AllEntryView extends Component {
              constructor(props) {
              super(props)
                this.state = {
                  dailyLog: []
                }
              }
    componentDidMount() {
      fetch('http://localhost:8000/daily-activities',{ method: 'GET'})
      .then(res => res.json())
      .then(entries => {
        this.setState({ dailyLog: entries         
            })
            console.log(this.state.dailyLog)
          })
    }
          
    render() {
       const displayEntries = this.state.dailyLog.map((entry) => { 
           return <div><h5 key={entry.id}>{entry.date}</h5>
                    <h4>Mood on This Day</h4>
           <ul>
               <li>Happiness: {entry.rate_happiness}</li>
               <li>Focus: {entry.rate_focus}</li>
               <li>Energy: {entry.rate_energy}</li>
        </ul><button>View This Day</button>
        <hr></hr>
        </div>
        })
    return (
      <div className="dailylog-entries">
          {displayEntries}
          <RatingBox rating={this.state.dailyLog}/>
      </div>
    );
  }
}

  export default AllEntryView;