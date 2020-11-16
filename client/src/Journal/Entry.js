import React from 'react';
import '../Pages/Pages.css'



function Entry(props) {
    
    return (
        <div 
         style= {entryStyle}
        >
             <h4>{props.journal.title}</h4>
            <p>Mood: {props.journal.mood}</p>
            <p><button>View Entry</button></p>
        </div>
    )

}
const entryStyle={
    backgroundColor: "pink",
    padding: "10px",
    textAlign: "center",  
    boxShadow: "0px 5px 6px black",
    transform: "rotate(1deg)",
    margin: "15px"
}
export default Entry;