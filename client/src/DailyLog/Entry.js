import React from 'react';
import '../Pages/Pages.css'
import moment from "moment";


function Entry({log}) {
    const entry= log
    const date = moment(entry.date).format("LL")
    return (
        <div style = {entryStyle}> 
        <h4>{date}</h4>
               <h4>Mood on This Day</h4>
                   <p>Happiness: {entry.rate_happiness}</p>
                   <p>Focus: {entry.rate_focus}</p>
                   <p>Energy: {entry.rate_energy}</p>
            <button>View This Day</button>
        </div>        
    )

}
const entryStyle={
    backgroundColor: "aqua",
    padding: "10px",
    textAlign: "center",
    boxShadow: "0px 6px 7px black",
    transform: "rotate(1deg)",
    margin: "15px"
}
export default Entry;