import React from 'react';
import moment from 'moment'


function RatingBox({rate}) {
    const elements= rate
    function bestRating() {
        let rating= 0
        let date = ''
        for (let i=0; i < elements.length; i++) {
       if( (elements[i].rate_happiness + elements[i].rate_focus + elements[i].rate_energy) /3 > rating ) {
            rating = (elements[i].rate_happiness + elements[i].rate_focus + elements[i].rate_energy)/3 
            date = elements[i].date
       }     
    } 
    rating = Math.round(rating) 
    const dateFormat = moment(date).format("LL")
    return <div><h4>Your Best day Was:</h4><p>{dateFormat}</p><p>With a Mood Rating of {rating}</p></div>
}
    const string = bestRating()
    return (
      <div style = {ratingBoxStyle} className="Rating-Box">
          {string}
      </div>
    );
  }
  
  const ratingBoxStyle = {
    backgroundColor: "yellow",
    padding: "10px",
    textAlign: "center",
    maxWidth: "60%",
    boxShadow: "0px 13px 10px black",
    transform: "rotate(-3deg)"
  }
  

  export default RatingBox;