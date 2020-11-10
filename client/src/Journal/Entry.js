import React from 'react';
import '../Pages/Pages.css'



function Entry(props) {
    console.log(props)
    return (
        <div>
             <h4>{props.journal.title}</h4>
            <p>Mood: {props.journal.mood}</p>
            <p><button>View Entry</button></p>
        </div>
    )

}

export default Entry;