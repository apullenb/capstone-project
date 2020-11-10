import React from 'react'
import '../Pages/Pages.css'


function NewJournalEntry () {
    return (
        <div>
            <h2>New Journal Entry</h2>
            <form>
               <p> <label>Current Mood:
                    <select>
                        <option>Happy</option>
                        <option>Excited</option>
                        <option>Hopeful</option>
                        <option>Frustrated</option>
                        <option>Angry</option>
                        <option>Depressed</option>
                    </select>
                </label> </p>
                <p> <label> Entry Title:
                    <input type="text" placeholder="I am feeling...!" />
                </label> </p>
                <label> <p>Journal Entry Content:</p>
                    <input type="textarea" placeholder="This is what happened today!..." />
                </label>
                <p><button>Submit</button></p>
            </form>
        </div>
    )
}

export default NewJournalEntry;