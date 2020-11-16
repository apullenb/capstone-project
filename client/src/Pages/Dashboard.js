import React, {Fragment, useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import AllEntryView from '../DailyLog/AllEntryView';
import AllJournalEntries from '../Journal/AllJournalEntries';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import RatingBox from '../Page Components/RatingBox';
const Dashboard = ({setAuth}) => {
    const [name, setName] = useState('')

   async function getName() {
        try {
            const response = await fetch('http://localhost:8000/dashboard', {
                method: 'GET',
                headers: {token: localStorage.token}
            })
            const parseRes = await response.json()

           setName(parseRes.username)

        } catch (error) {
            console.error(error.message)
        }
    }
   
    const logout = e => {
        e.preventDefault()
        localStorage.removeItem('token');
        setAuth(false)
        toast.success('Logged Out Successfully')
    }
    useEffect(() => {
        getName()
    }, []);

    
    return(
        <Fragment>
            <button onClick= {e => logout(e)}>Logout</button>
            <h3>Dashboard </h3>
                <h1>Hello {name}</h1>
                <Row gutter={2}>
                     <Col span={6}><AllEntryView /></Col>
                     <Col span={6}><AllJournalEntries /></Col>
                     <Col span={6}></Col>
                </Row>
        </Fragment>
    )
}

export default Dashboard;