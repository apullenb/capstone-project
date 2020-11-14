import React from 'react';
import '../Pages/Pages.css'



function Entry(props) {
    console.log(props)
    return (
        <div style= {entryStyle}>
             <h4>{props.journal.title}</h4>
            <p>Mood: {props.journal.mood}</p>
            <p><button>View Entry</button></p>
        </div>
    )

}
const entryStyle={
    backgroundColor: "aqua",
    padding: "2rem",
    textAlign: "center",
    maxWidth: "275px",  
    position : "relative",
    boxShadow: "0px 13px 10px black",
    transform: "rotate(1deg)"
}
export default Entry;