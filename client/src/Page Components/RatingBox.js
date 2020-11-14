import React from 'react'



function RatingBox(props) {
    const elements= props.rating
    function bestRating() {
        let rating= 0
        let date = ''
        for (let i=0; i < elements.length; i++) {
       console.log('before loop', elements[i].rate_happiness + elements[i].rate_focus + elements[i].rate_energy)
       if( (elements[i].rate_happiness + elements[i].rate_focus + elements[i].rate_energy) /3 > rating ) {
            rating = (elements[i].rate_happiness + elements[i].rate_focus + elements[i].rate_energy)/3 
            date = elements[i].date
           console.log('after loop', rating, date)
       }     
    } 
    rating = Math.round(rating) 
    return <div><h4>Your Best day Was:</h4><p>{date}</p><p>With a Mood Rating of {rating}</p></div>
}
    const string = bestRating()
    return (
      <div style = {ratingBoxStyle} className="Rating-Box">
          {string}
      </div>
    );
  }
  
  const ratingBoxStyle = {
    backgroundColor: "#FFC",
    padding: "2rem",
    textAlign: "center",
    maxWidth: "200px",  
    position : "relative",
    zIndex  : "-1",
    bottom   : "15px",
    right    : "5px",
    width    : "50%",
    top      : "80%",
    maxWidth: "200px",  
    boxShadow: "0px 13px 10px black",
    transform: "rotate(4deg)"
  }
  

  export default RatingBox;