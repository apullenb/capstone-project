import React, {useState} from 'react'
import '../Pages/Pages.css'


function NewJournalEntry () {
    const [inputs, setInputs] = useState({
        mood: '',
        title: '',
        content:''
    })

    const {mood, title, content} = inputs

    const onChange = (e) => 
        setInputs({...inputs, [e.target.name] : e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
        
            const body = {mood, title, content}
            const token = localStorage.getItem('token')
            const response = await fetch('http://localhost:8000/api/journal', {
                method: "POST", headers: {"content-type" : "application/json", 'token': `${token}`}, body: JSON.stringify(body)
            })
            const parseRes = await response.json()
            console.log(parseRes)
            if (!parseRes.error) {
                alert('Success! Your Entry Has Been Posted')
            } else {
             console.error(parseRes.error) 
            } 
        }
            
        
    



    return (
        <div>
            <h2>New Journal Entry</h2>
               <p> <label>Current Mood:
                    <select name='mood' value= {mood} onChange={e=> onChange(e)}>
                        <option>Happy</option>
                        <option>Excited</option>
                        <option>Hopeful</option>
                        <option>Frustrated</option>
                        <option>Angry</option>
                        <option>Depressed</option>
                    </select>
                </label> </p>
                <p> <label> Entry Title:
                    <input type="text" placeholder="I am feeling...!" name='title' value= {title} onChange={e=> onChange(e)}  />
                </label> </p>
                <label> <p>Journal Entry Content:</p>
                    <input type="textarea" placeholder="This is what happened today!..." name = 'content' value= {content} onChange={e=> onChange(e)}  />
                </label>
                <p><button onClick= {onSubmit}>Submit</button></p>
        </div>
    )
}

export default NewJournalEntry;