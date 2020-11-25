import React from 'react';
import {Link} from 'react-router-dom';
import ViewEntry from './ViewEntry'
import background from './journal-back.png'



function Entry(props) {
    
    return (
        <div>
            <span  style= {container}>
             <h4>{props.journal.title}</h4>
            <p>Mood: {props.journal.mood}</p>
            <p><Link to = {{pathname: `/journal/${props.journal.id}`, state: props.journal}}> <button> View Entry</button> </Link></p>
        </span>
        </div>
    )

}
const container={
    display: 'flex',
    flex: '1',
     justifyContent: 'space-between',
     alignItems: 'left',
    background: `url(${background})`,
    width:'100%',
   paddingBottom: '10px',
   paddingTop: '10px',
   paddingLeft:'15px',  
    boxShadow: "0px 2px 4px gray",  
    border: "1px solid #314458"
}
export default Entry;