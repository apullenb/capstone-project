import react, {useState} from 'react';




function LogNewEntry() {

    const [inputs, setInputs] = useState({
        medicine: '',
        hours_slept:'',
        food: '',
        sugar_intake:'',
        rate_focus:'', 
        rate_happiness:'', 
        rate_energy: ''
    })
   

    const {medicine, hours_slept, food, sugar_intake, rate_focus, rate_happiness, rate_energy} = inputs
    
    const onChange = (e) => 
        setInputs({...inputs, [e.target.name] : e.target.value })
    
       
    const onSubmit = async () => {
            const body = {medicine, hours_slept, food, sugar_intake, rate_focus, rate_happiness, rate_energy}
            const token = localStorage.getItem('token')
            const response = await fetch('http://localhost:8000/api/activity', {
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
          <h1>Daily Entry Form</h1>
            <h2> Rate Yourself</h2>
            <label>
              <h4>How Many Hours Did You Sleep Last Night?</h4>
              </label>
            <input type="number" style= {{width: "50px"}} name="hours_slept" onChange={e=> onChange(e)} value={hours_slept} required/>
            <label>
              <h4>What Medicine(s) Did You Take Today?</h4>
              </label>
            <input type="text" name="medicine" onChange={e=> onChange(e)} value={medicine} required />
            <h4>What Did You Eat Today?</h4>
            <textarea name='food' onChange={e=> onChange(e)} value={food} rows='5' cols='25' placeholder= {`Breakfast:_____   Lunch:____           Dinner:_____         Snack:______
            `}/>
              <label>
              <h4>How Much Sugar Did You Eat Today?</h4>
              (On a Scale of 1-5)
            </label>
            <input type="range" name="sugar_intake"  min="1" max="5" onChange={e=> onChange(e)} value={sugar_intake}/>
            <label>
              <h4>Rate Your Focus Today</h4>
            </label>
            <input type="range" name="rate_focus" min="0" max="5"  onChange={e=> onChange(e)} value={rate_focus}/>
            <label>
              <h4>Rate Your Happiness Today</h4>
            </label>
            <input type="range" name="rate_happiness" min="0" max="5"  onChange={e=> onChange(e)} value={rate_happiness}/>
            <label>
              <h4>Rate Your Energy Level Today</h4>
            </label>
            <input type="range" name="rate_energy" min="0" max="5"  onChange={e=> onChange(e)} value={rate_energy}/>
                <p><button onClick= {onSubmit}> Submit</button></p>
        </div>
    )}

export default LogNewEntry;