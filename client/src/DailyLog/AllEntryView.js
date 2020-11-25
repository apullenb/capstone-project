import React, { Component } from 'react'
import RatingBox from '../Page Components/RatingBox'
import Entry from './Entry'
import {Link} from 'react-router-dom'


class AllEntryView extends Component {
              constructor(props) {
              super(props)
                this.state = {
                  dailyLog: [],
                  text: ''
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
           
           if (this.state.dailyLog.length == 0 ) {
            this.setState({text : 'No Entries Yet. Please add New Entry'}) 
          }
          })
    }
   
      
 
    render() {
    const log = this.state
      return (
        <div className="dailylog-entries">
          <RatingBox rate={this.state.dailyLog} />
          <h2>Your Daily Activity Log</h2>
          <h3>{this.state.text}</h3>
          {this.state.dailyLog.map((entry) => { 
          return   <div style={cardStyle} key={entry.id}><Entry log= {entry}/></div>})}
            <Link to = {{pathname: '/lognewentry', state: log}}> <button style={{marginLeft:'20%', marginRight:'20%', marginBottom:'5%', marginTop:'8%'}}>Record New Daily Entry</button></Link>
           
      </div>
      )
  
  }
}
const cardStyle = {
  
  display: 'inline-block',
  alignContent: 'center',
  marginTop: '10px',
 marginBottom:'10px',
 marginLeft: '5px',
 marginRight: '5px',
}
  export default AllEntryView;