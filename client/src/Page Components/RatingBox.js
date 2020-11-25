import React from 'react';
import moment from 'moment'


function RatingBox(props) {
  console.log('rating box', props)
    const elements= props.rate
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
      <div 
      style = {ratingBoxStyle} className="Rating-Box"
      >
          {string}
      </div>
    );
  }
  
  const ratingBoxStyle = {
    backgroundColor: "#01b8d8",
    padding: "15px",
    textAlign: "center",
    maxWidth: "60%",
    boxShadow: "0px 3px 3px black",
    marginLeft:'15px',
   
    
  }
  

  export default RatingBox;